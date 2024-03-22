import { MadocTheme } from '@madoc.io/types/dist/frontend/themes/definitions/types';

const theme: MadocTheme = {
    custom: {
        header: {
            headerBackground: '#002d4b',
            headerText: 'white',
            searchBorder: '#B1E0FF',
        },
        footer: {
            background: '#002d4b',
            color: '#B1E0FF',
            containerBackground: '#002d4b',
        },
        fonts: {
            fontFamily: "'IBM Plex Sans', sans-serif",
        },
        accent: {
            primary:  '#B1E0FF',
            secondary:  '#B1E0FF',
        }
    },
    header: 'dark',
    fonts: 'default',
    accent: 'default',
    siteContainer: 'default',
    footer: 'dark',
    global: 'default',
};

export const idaTheme = {
    id: 'ida-plugin-theme',
    name: 'IDA plugin theme',
    version: '1.0.0',
    description: 'This is my theme loaded from a plugin',
    thumbnail: 'https://user-images.githubusercontent.com/8266711/118507448-25750b80-b726-11eb-9f87-d96f43c0a894.png',
    theme,
    extra: {
        stylesheets: [
            'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
        ],
    },
};
