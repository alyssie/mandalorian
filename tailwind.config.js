module.exports = {
purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
darkMode: false, // or 'media' or 'class'
theme: {
    extend: {
        colors: {
            'primary': {
                1: "#132034",
                0: "#1320343d",
                light: "#506077"
            },
            'secondary': {
                1: "#c5a974",
                0: "#c5a9743d"
            },
            'green': {
                1: '#2edb34',
                0: '#2edb34ed'
            },
            'white': {
                1: '#ffffff',
                0: '#ffffff3d'
            },
            'black': {
                1: '#000000',
                0: '#0000003d'
            },
            'gray': '#656565'
        },
        fontSize: {
            'sm': '0.95rem',
            '3xl': '1.6rem',
            '4xl': '2.5rem',
        },

    },
},
variants: {
    extend: {},
},
plugins: [],
}
