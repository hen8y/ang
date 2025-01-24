/** @type { hairlineWidth } */
import {
    hairlineWidth
} from 'nativewind/theme';

const colors = require('./settings/colors.json');

module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            borderWidth: {
                hairline: hairlineWidth,
            },
            colors: {
                'primary-color': colors.light.primary,
                'theme-color': colors.light.theme,
                'theme-color-mild': colors.light.themeMild,
                'dark-primary-color': colors.dark.primary,
                'dark-theme-color': colors.dark.theme,
                'dark-theme-color-mild': colors.dark.themeMild,
            },
        },
    },
    plugins: [],
    darkMode: 'class'
}
