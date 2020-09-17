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
        extend: {
            colors: {
                green1: '#507255',
                green2: '#6EB257',
                green3: '#4AAD52',
                green4: '#488B49',
                soft: '#F8FBEC',
            },
        },
    },
};
