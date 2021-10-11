import styled from 'styled-components';

const ChartHeader = styled.header`
    margin-bottom: 2rem;
    width: fit-content;
    h1 {
        font-size: 2.25rem;
        margin: 0;
        background-image: linear-gradient(
            90deg,
            rgb(209, 213, 218) 50%,
            rgba(255, 255, 255, 0) 0px
        );
        background-position: center bottom;
        background-repeat: repeat-x;
        background-size: 1rem 0.2rem;
        padding-bottom: 0.6rem;
    }
`;

export default ChartHeader;
