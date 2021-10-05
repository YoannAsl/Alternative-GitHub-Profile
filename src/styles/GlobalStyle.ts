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
        font-size: 62.5%
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 500;
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
