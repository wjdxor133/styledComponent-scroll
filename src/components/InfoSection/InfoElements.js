import styled from 'styled-components;';

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({ lightBg }) => lightBg ? '#f9f9f9' : '#010606'};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? 'col1 col2': `'col1 col2`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? 'col1 col2': `'col1 col2`};
    }
`;