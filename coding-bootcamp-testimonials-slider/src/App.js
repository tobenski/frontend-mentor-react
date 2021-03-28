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
    background-position: 550px center, left bottom, 250px 250px;
    background-size: 600px, auto, 10%;
    display: grid;
    place-items: center;
    min-height: 100vh;
    width: 100vw;
`;

export default App;
