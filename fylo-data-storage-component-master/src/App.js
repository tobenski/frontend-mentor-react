import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navigation';
import StatusBar from './components/StatusBar';
import bgMobile from './images/bg-mobile.png';
import bgDesktop from './images/bg-desktop.png';

function App() {
    return (
        <Wrapper className='App'>
            <Navigation />
            <StatusBar />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    background-image: url(${bgMobile});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 640px) {
        background-image: url(${bgDesktop});
        background-size: contain;
        background-position: bottom;
        background-color: var(--very-dark-blue);

        flex-direction: row;
        vertical-align: bottom;
    }
`;

export default App;
