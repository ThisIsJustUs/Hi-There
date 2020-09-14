/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// const { default: keys } = require('./config/keys');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Open Sans`,
                        variants: [`300`, `400`, `600`, `700`],
                    },
                    {
                        family: `PT Serif`,
                        variants: [`400`, `700`],
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.MAILCHIMP_ENDPOINT,
            },
        },
    ],
};
