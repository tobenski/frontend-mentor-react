import './App.css';
import styled from 'styled-components';
import Accordion from './components/Accordion';
import bgMobile from './images/bg-pattern-mobile.svg';
import fgMobile from './images/illustration-woman-online-mobile.svg';
import bgDesktop from './images/bg-pattern-desktop.svg';
import fgDesktop from './images/illustration-woman-online-desktop.svg';
import boxDesktop from './images/illustration-box-desktop.svg';

function App() {
    return (
        <Main className='App'>
            <section>
                <div className='image-wrapper'>
                    <img src={fgMobile} alt='' className='mobile' />
                    <img src={boxDesktop} alt='' className='desktop' />
                </div>
                <div className='faq-wrapper'>
                    <h1>FAQ</h1>
                    <Accordion />
                </div>
            </section>
        </Main>
    );
}

const Main = styled.main`
    width: 100vw;
    min-height: 100vh;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
    padding-bottom: 5rem;

    .image-wrapper {
        position: relative;
        height: 125px;
        img {
            position: absolute;
            top: -110px;
            margin: auto;
            left: 0;
            right: 25px;
        }
    }

    section {
        background-color: white;
        background-image: url(${bgMobile});
        background-repeat: no-repeat;
        background-position: 50% 0%;
        overflow: visible;
        width: 800px;
        max-width: 90%;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        /* min-height: 600px; */
    }
    h1 {
        font-size: 2rem;
    }
    @media (min-width: 640px) {
        padding-top: 0;
        padding-bottom: 0;
        section {
            flex-direction: row;
            background-image: url(${bgDesktop}), url(${fgDesktop});
            background-size: 100%, 50%;
            background-position: -475px -250px, -75px 50px;
            padding: 3rem;
        }
        .image-wrapper {
            /* background-image: url(${bgDesktop}); */
            background-repeat: no-repeat;
            background-size: 750px;
            background-position: 110% 70%;
            width: 50%;
            height: auto;
            img {
                top: 95px;
                margin: 0;
                left: -140px;
                /* right: 0; */
            }
        }
        .faq-wrapper {
            width: 50%;
        }
        .mobile {
            display: none;
        }
    }
`;

export default App;
