import React from 'react';
import styled from 'styled-components';
import bgtop from './images/bg-pattern-top.svg';
import bgbottom from './images/bg-pattern-bottom.svg';
import card from './images/bg-pattern-card.svg';
import victor from './images/image-victor.jpg';

const ProfileCard = () => {
    return (
        <Wrapper>
            <article class='card'>
                <div class='card-top'></div>
                <div class='card-img'>
                    <img src={victor} alt='Victor Crest' />{' '}
                </div>
                <div class='card-bottom'>
                    <h4>
                        Victor Crest <span>26</span>
                    </h4>
                    <h5>London</h5>
                    <div class='card-footer'>
                        <div>
                            <h6>80K</h6>
                            <p>Followers</p>
                        </div>
                        <div>
                            <h6>803K</h6>
                            <p>Likes</p>
                        </div>
                        <div>
                            <h6>1.4K</h6>
                            <p>Photos</p>
                        </div>
                    </div>
                </div>
            </article>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    --dark-cyan: hsl(185, 75%, 39%);
    --very-dark-desaturated-blue: hsl(229, 23%, 23%);
    --dark-grayish-blue: hsl(227, 10%, 46%);
    --dark-gray: hsl(0, 0%, 59%);

    background-image: url(${bgtop}), url(${bgbottom});
    background-position: top -450px left -350px, bottom -600px right -300px;
    background-repeat: no-repeat, no-repeat;
    background-color: var(--dark-cyan);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    color: white;
    font-size: 18px;
    font-family: 'Kumbh Sans', sans-serif;

    .card {
        background-color: white;
        color: var(---dark-gray);
        height: 400px;
        width: 400px;
        border-radius: 20px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        position: relative;
    }

    .card-top {
        background-image: url(${card});
        height: 40%;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .card img {
        position: absolute;
        height: 80px;
        width: 80px;
        top: 120px;
        left: 160px;
        border-radius: 50%;
        background: white;
        padding: 5px;
    }

    .card-bottom {
        margin-top: 60px;
        color: var(--very-dark-desaturated-blue);
    }
    h1 {
    }
    h4 {
        margin-bottom: 10px;
        span {
            color: var(--dark-gray);
        }
    }
    h5 {
        margin-bottom: 10px;
        color: var(--dark-gray);
    }
    h6 {
        font-weight: 600;
        font-size: 18px;
    }
    p {
        font-size: 10px;
        font-weight: 600;
        color: var(--dark-gray);
        letter-spacing: 1px;
    }

    .card-footer {
        position: absolute;
        bottom: 0;
        padding-bottom: 25px;
        margin-top: 20px;
        padding-top: 20px;
        border-top-width: 1px;
        border-top-color: var(--dark-gray);
        border-top-style: solid;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
`;

export default ProfileCard;
