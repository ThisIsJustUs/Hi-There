const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    important: true,
    theme: {
        fontFamily: {
            display: ['PT Serif', 'sans-serif'],
            body: ['Open Sans', 'sans-serif'],
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
