const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
import preset from './vendor/filament/support/tailwind.config.preset';

module.exports = {
    darkMode: 'class',
    presets: [
        preset
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.indigo,

                green: colors.emerald,
                yellow: colors.amber,
                purple: colors.violet,

                danger: colors.rose,
                success: colors.green,
                warning: colors.yellow,

                current: 'currentColor',
            },
            brightness: {
                5: '.05',
                10: '.10',
                15: '.15',
                20: '.20',
                25: '.25',
                30: '.30',
                35: '.35',
                40: '.40',
                45: '.45'
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
        }
    },
    content: [
        './app/**/*.php',
        './resources/**/*.html',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
        './resources/**/*.blade.php',
        './resources/**/*.php',
        './resources/**/*.vue',
        './resources/**/*.twig',
        './storage/framework/views/*.php',
        // Filament files
        './app/Filament/**/*.php',
        './resources/views/filament/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        // Wire-elements modal files
        './vendor/wire-elements/modal/src/ModalComponent.php',
    ],
    safelist: [
        "sm:max-w-sm",
        "sm:max-w-md",
        "sm:max-w-lg",
        "sm:max-w-xl",
        "sm:max-w-2xl",
        "sm:max-w-3xl",
        "sm:max-w-4xl",
        "sm:max-w-5xl",
        "sm:max-w-6xl",
        "sm:max-w-7xl",
        "md:max-w-lg",
        "md:max-w-xl",
        "lg:max-w-2xl",
        "lg:max-w-3xl",
        "xl:max-w-4xl",
        "xl:max-w-5xl",
        "2xl:max-w-6xl",
        "2xl:max-w-7xl'",
    ],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
    ],
};
