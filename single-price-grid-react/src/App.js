import React from 'react';
import styled from 'styled-components';
import PriceGrid from './components/PriceGrid';

function App() {
    return (
        <Wrapper>
            <PriceGrid />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    display: flex;
    width: 100vw;
    min-height: 100vh;

    @media (min-width: 640px) {
        align-items: center;
    }

    justify-content: center;
`;
export default App;
