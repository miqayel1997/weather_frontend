/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js}'],
    theme: {
        extend: {
            spacing: {},
            boxShadow: {
                sidebar: '0px 0 10px rgb(0 0 0 / 50%)'
            }
        }
    },
    plugins: []
};
