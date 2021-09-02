module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'app-purple': '#5267DF',
                'app-red': '#FA5959',
                'app-blue': '#242A45',
                'app-grey': '#9194A2',
                'app-white': '#f7f7f7',
            },
        },
        fontFamily: {
            Poppins: ['Poppins', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
            lg: '1124px',
            xl: '1224px',
            '2xl': '1224px',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
