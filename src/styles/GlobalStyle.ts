import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'RobotoMono';
        src: url('/fonts/RobotoMono/RobotoMono-Regular.ttf') format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'RobotoMono';
        src: url('/fonts/RobotoMono/RobotoMono-Medium.ttf') format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter/Inter-Regular.ttf') format('truetype');
        font-weight: 400;
    }
    @font-face {
        font-family: 'Inter';
        src: url('/fonts/Inter/Inter-Medium.ttf') format('truetype');
        font-weight: 500;
    }

    html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Inter';
    }

    a {
        text-decoration: none;
    }

    ul,
    li {
        margin: 0;
        padding: 0;
        text-indent: 0;
        list-style: none;
    }
`;

export default GlobalStyle;
