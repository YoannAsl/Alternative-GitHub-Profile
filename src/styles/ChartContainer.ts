import styled from 'styled-components';

const ChartContainer = styled.div`
    background-color: white;
    padding: 3.5rem;
    border-radius: 0.5rem;
    box-shadow: 0rem 0.5rem 3rem rgba(0, 0, 0, 0.1);
    max-width: 50rem;
    @media (max-width: 25em) {
        padding: 3.5rem 2rem;
    }
`;

export default ChartContainer;
