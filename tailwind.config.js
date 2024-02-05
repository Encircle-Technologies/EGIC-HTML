/**
* Configuration
*/
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: 
            ['./pages/*.html',
            './assets/**/*.js'],
    corePlugins: {
        preflight: false,  
    },
    darkMode: 'class', // or 'media' or 'class' 
    theme: {
        fontFamily: {
            karla: ['Karla'],
            Luloclean: ['lulo-one'],
            ccsign: ['ccsignlanguage']
        },
        
        colors: {
            transparent: 'transparent',   
            White: '#FFFFFF',
            blue: '#033A72',
            black: {
                100: '#000000',
                200: '#404040',
            },
            purple: '#2709A9',
            yellow: '#CF7B1E',
            lightBlue: '#0A599E',
        },
        flex: {
            auto: '1 1 auto',
            initial: '0 1 auto',
            inherit: 'inherit',   
            none: 'none',
        },
        zIndex: {
            '1_minus': '-1',
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            9: 9,
            10: 10,
            20: 20,
            11: 11,
            12: 12,
            98: 98,
            99: 99,
            100: 100,
            999: 999,
            9999: 9999,
        },
        padding: {
            0: '0px',
            10: '10px',
            20: '20px',
            28: '28px',
            30: '30px',
            40: '40px',
            50: '50px',
            80: '80px',
            100: '100px',
            140: '140px',
        },
        margin: {
            auto: 'auto',
            0: '0',
            10: '10px',
            20: '20px',
            'minus-50': '-50px',
            100: '100px',
        },
        fontSize: {
            14: '14px',
            16: '16px',
            18: '18px',
            24: '24px',
            32: '32px',
            48: '48px',
        },
        lineHeight: {
            20: '20px',
            21: '21px',
            26: '26px',
            28: '28px',
            37: '37px',
            38: '38px',
            56: '56px',
        },
        letterSpacing: {            
            2.1: '2.1px',          
        },        
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            700: '700',
            800: '800',
            900: '900',
        },
        inset: {
            0: '0px',
            2: '2px',
            4: '4px',
            5: '5px',
            6: '6px',
            10: '10px',
            15: '15px',
            16: '16px',
            18: '18px',
            19: '19px',
            20: '20px',
            22: '22px',
            25: '25px',
            30: '30px',
            40: '40px',
            50: '50px',
            55: '55px',

            80: '80px',

            '50_per': '50%',
            140: '140px',
            190: '190px',
            auto: 'auto',
        },
        
        backgroundImage: theme => ({
            none: 'none',
            'blue-gradient': ' linear-gradient(90.09deg, #003367 0%, #0A599E 100%);',
            'purple-gradient':'linear-gradient(90.09deg, #201453 0%, #20068F 100%);',
            'red-gradient': 'linear-gradient(90.09deg, #FF3D31 0%, #C51A0F 100%);',
            'green-gradient': 'linear-gradient(90.09deg, #8AB62D 0%, #668D12 100%);',
            'white-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.490922) 35.15%, rgba(255, 255, 255, 0.372782) 52.95%, rgba(255, 255, 255, 0) 84.16%);',
            'grey-gradient': 'linear-gradient(90.09deg, #7F9CA7 0%, #9AB7C1 100%);',
            'mobile-white-gradient': 'linear-gradient(360deg, #FFFFFF 40.96%, rgba(255, 255, 255, 0.811981) 46.94%, rgba(255, 255, 255, 0.548337) 51.3%, rgba(255, 255, 255, 0) 56.15%);'
        }),
        borderRadius: {
            none: '0',
            10: '10px',
            20: '20px',
            50: '50%',
        },
        translate: {
            'minus_50': '-50%',
        },
        backgroundSize: {
            100: '100%',
            cover: 'cover',
            220: '220%',
        },
        boxShadow: {
            'cardshadow': '0px 4px 14px 0px #00000040;',
        },
        outline: {
            none: 'none',
        },
        spacing: {
            8: '8px',
            25: '25px',
            40: '40px',
            55: '55px',
            100: '100px',
        },
        extend: {
            width: {
                0: '0px',
                4: '4px',
                12: '12px',
                15: '15px',
                20: '20px',
                25: '25px',
                40: '40px',
                45: '45px',
                48: '48px',
                50: '50px',
                54: '54px',
                84: '84px',
                86: '86px',
                70: '70px',
                100: '100px',
                126: '126px',
            },
            height: {
                0: '0px',
                4: '4px',
                12: '12px',
                40: '40px',
                80: '80px',
                84: '84px',
                86: '86px',
                100: '100px',
                126: '126px',
                heroHeight: 'calc(100vh - 206px)',
                mobileHeight: 'calc(78vh - 186px)',
                780: '780px',
            },
            screens: {
                xxl: {'min': '1600px'},
                xl: {'min': '1200px'},
                desktop: { 'max': '1440px' },
                laptop: { 'max': '1366px' },             
                xlscreen: { 'max': '1199px' },
                lgscreen: { 'max': '1023px' },
                ipad: { 'max': '991px' },
                mdscreen: { 'max': '767px' },
                smscreen: { 'max': '575px' }, 
                xsscreen: { 'max': '375px' },
            }
        }
    },
    variantOrder: [

    ],
    variants: {
        // extend: {},
    },
    plugins: [
        
    ],
}