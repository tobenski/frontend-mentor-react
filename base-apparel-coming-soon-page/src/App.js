import './App.css';
import styled from 'styled-components';
import logo from './images/logo.svg';
import heroMobile from './images/hero-mobile.jpg';
import heroDesktop from './images/hero-desktop.jpg';
import bgDesktop from './images/bg-pattern-desktop.svg';
import submitBtn from './images/icon-arrow.svg';
import errorIcon from './images/icon-error.svg';
import React from 'react';

function App() {
    const [error, setError] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    const handleChange = (e) => {
        setError(false);
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pattern.test(email)) {
            setError(true);
        }
    };
    return (
        <Main className='App'>
            <div className='header'>
                <img src={logo} alt='Base Apparel' />
            </div>
            <div className='hero'></div>
            <div className='content'>
                <h1>
                    <span>We're</span>
                    <br />
                    coming
                    <br />
                    soon
                </h1>
                <p>
                    Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with
                    announcements and our launch deals.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        autoFocus
                        placeholder='Email Address'
                        className={`${error ? 'error' : null}`}
                        value={email}
                        onChange={handleChange}
                        aria-label='email'
                    />

                    <button type='submit'>
                        <img src={submitBtn} alt='arrow' />
                    </button>
                    <img
                        src={errorIcon}
                        alt='!'
                        className={`error-icon ${error ? 'error' : null}`}
                    />
                    <span className={`error-text ${error ? 'error' : null}`}>
                        Please provide a valid email!
                    </span>
                </form>
            </div>
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    .header {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 2rem;
        img {
            height: 25px;
        }
    }

    .hero {
        height: 250px;
        background-repeat: no-repeat;
        background-position: cover;
        background-image: url(${heroMobile});
        margin-bottom: 4rem;
    }

    .content {
        h1 {
            text-transform: uppercase;
            font-size: 3rem;
            width: 100%;
            text-align: center;
            font-weight: 400;
            color: var(--dark-grayish-red);
            margin-bottom: 1rem;
            span {
                color: var(--desaturated-red);
                font-weight: 300;
                text-transform: uppercase;
            }
        }
        p {
            width: 100%;
            padding: 0 1.25rem;
            line-height: 1.5;
            color: var(--desaturated-red);
            font-weight: 300;
            margin-bottom: 1rem;
        }

        form {
            padding: 1rem;
            position: relative;
            input {
                border: var(--desaturated-red) solid 1px;
                border-radius: 25px;
                color: var(--desaturated-red);
                padding: 1rem 1rem;
                width: 100%;
                outline: none;
            }
            input::placeholder {
                color: var(--desaturated-red);
            }
            .error-icon {
                position: absolute;
                right: 25%;
                top: 25px;
                visibility: hidden;
                border: none !important;
            }
            .error-text {
                visibility: hidden;
                position: absolute;
                font-size: 0.75rem;
                color: var(--soft-red);
                left: 30px;
                right: 10px;
                bottom: -10px;
                text-align: left;
                margin-top: 0.5rem;
                border: none !important;
            }
            .error,
            input.error {
                border: var(--soft-red) solid 1px;
                color: var(--soft-red);
                visibility: visible;
            }
            button {
                position: absolute;

                background: linear-gradient(
                    135deg,
                    hsl(0, 80%, 86%),
                    hsl(0, 74%, 74%)
                );
                top: 6;
                height: 50px;
                width: 75px;
                right: 15px;
                z-index: 2;
                border: none;
                border-radius: 25px;
                outline: none;
            }
            button:hover {
                background: linear-gradient(
                    135deg,
                    hsl(0, 70%, 90%),
                    hsl(0, 90%, 90%)
                );
                box-shadow: 0px 10px 20px 0px #f4aaab;
            }
        }
    }

    @media (min-width: 640px) {
        flex-direction: row-reverse;
        height: 100vh;
        .header {
            position: absolute;
        }
        .hero {
            height: 100vh;
            width: 50vw;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url(${heroDesktop});
            margin-bottom: 0;
        }
        .content {
            background-image: url(${bgDesktop});
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 10rem 5rem;
            height: 100vh;
            width: 50vw;

            h1 {
                letter-spacing: 1rem;
                text-align: left;
                margin-bottom: 2rem;
                span {
                }
            }
            p {
                padding: 0;
                text-align: left;
                margin-bottom: 2rem;
            }
            form {
                padding: 0;
                button {
                    right: 0;
                }
                .error-icon {
                    top: 10px;
                }
                .error-text {
                    left: 15px;
                    bottom: -20px;
                }
            }
        }
    }
`;

export default App;
