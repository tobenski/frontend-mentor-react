import React from 'react';
import styled from 'styled-components';
import drawers from '../images/drawers.jpg';
import avatar from '../images/avatar-michelle.jpg';

import {
    FaFacebookSquare,
    FaTwitter,
    FaPinterest,
    FaShare,
} from 'react-icons/fa';

const ArticleCard = () => {
    const [social, setSocial] = React.useState(true);
    const toggleSocial = () => {
        setSocial(!social);
    };
    return (
        <Section>
            <img src={drawers} alt='Drawers' />
            <div>
                {' '}
                <article>
                    <h3>
                        Shift the overall look and feel by adding these
                        wonderful touches to furniture in your home
                    </h3>
                    <p>
                        Ever been in a room and felt like something was missing?
                        Perhaps it felt slightly bare and uninviting. I’ve got
                        some simple tips to help you make any room feel
                        complete.
                    </p>
                </article>
                <footer>
                    <div className={`${social ? '' : 'hidden'}`}>
                        <img src={avatar} alt='Michelle Appleton' />
                        <div>
                            <h5>Michelle Appleton</h5>
                            <p>28 Jun 2020</p>
                        </div>

                        <FaShare
                            className={`share-icon ${!social ? 'inverse' : ''}`}
                            onClick={toggleSocial}
                        />
                    </div>

                    <div className={`${social ? 'hidden' : ''} share`}>
                        <h6>share</h6>
                        <div className='icon-container'>
                            <FaFacebookSquare />
                            <FaTwitter />
                            <FaPinterest />
                        </div>
                        <FaShare
                            className='share-icon inverse mobile'
                            onClick={toggleSocial}
                        />
                    </div>
                </footer>
            </div>
        </Section>
    );
};

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 85%;
    border-radius: var(--border-radius);
    background: white;
    box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
    img {
        border-top-left-radius: var(--border-radius);
        border-top-right-radius: var(--border-radius);
    }
    h3 {
        text-align: left;
        margin-bottom: 1rem;
        font-weight: 700;
    }
    article {
        padding: 2rem 2rem 0.5rem;
    }
    footer {
        position: relative;
        div {
            display: flex;
            align-items: center;
            padding: 0.5rem 2rem;
            width: 100%;
            height: 4rem;
            img {
                height: 3rem;
                border-radius: 50%;
            }
            div {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                padding-left: 1rem;
                p {
                    color: var(--grayish-blue);
                }
            }
        }
    }
    .share-icon {
        float: right;
        background-color: var(--light-grayish-blue);
        color: var(--desaturated-dark-blue);
        width: 50px;
        height: 30px;
        padding: 5px;
        border-radius: 100%;
        cursor: pointer;
    }

    .inverse {
        background-color: var(--desaturated-dark-blue);
        color: var(--light-grayish-blue);
    }

    .share {
        display: flex;
        background-color: var(--very-dark-grayish-blue);
        border-bottom-left-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
        h6 {
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            color: var(--grayish-blue);
            font-size: 1rem;
            font-weight: 500;
        }
    }

    .icon-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        svg {
            font-size: 1.25rem;
            margin: 0rem 0.33rem;
            color: white;
        }
    }

    .hidden {
        display: none;
    }

    @media (min-width: 640px) {
        flex-direction: row;
        max-width: 720px;
        img {
            max-width: 300px;
            border-top-right-radius: 0;
            border-bottom-left-radius: var(--border-radius);
        }
        .hidden {
            display: flex;
        }

        .share {
            position: absolute;
            top: -70px;
            left: 223px;
            width: auto;
            border-radius: var(--border-radius);
        }
        .share::after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -10px;
            border-width: 10px;
            border-style: solid;
            border-color: var(--very-dark-grayish-blue) transparent transparent
                transparent;
        }
        .share.hidden {
            display: none;
        }

        .mobile {
            display: none;
        }
    }
`;

export default ArticleCard;
