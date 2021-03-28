import './App.css';
import styled from 'styled-components';
import Slider from './components/Slider';
import bgPattern from './images/pattern-bg.svg';
import curvePattern from './images/pattern-curve.svg';
import quotesPattern from './images/pattern-quotes.svg';

function App() {
    return (
        <Wrapper>
            <Slider />
        </Wrapper>
    );
}

const Wrapper = styled.main`
    background-image: url(${bgPattern}), url(${curvePattern}),
        url(${quotesPattern});
    background-repeat: no-repeat;
    background-position: calc(50% + 310px) calc(50% - 10px), left bottom,
        calc(50% - 375px) calc(50% - 140px);
    background-size: 625px, auto, 100px;
    display: grid;
    place-items: center;
    min-height: 100vh;
    width: 100vw;

    @media (max-width: 639px) {
        background-size: 350px, 75%, 75px;
        background-position: calc(50% + 0px) calc(5% - 0px), left bottom,
            calc(50%) calc(50%);
    }
`;

export default App;
