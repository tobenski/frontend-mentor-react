import React from 'react';
import styled from 'styled-components';

const Slide = ({ id, name, title, text, image, active }) => {
    return (
        <Wrapper className={`${id === active ? 'active' : ''}`}>
            <div className='image'>
                <img src={image} alt={name} />
            </div>
            <div className='content'>
                <p>" {text} "</p>
                <div className='name-container'>
                    <h3>{name}</h3>
                    <p>{title}</p>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.article`
    position: absolute;
    display: flex;
    opacity: 0;
    font-size: 2rem;
    height: 100%;
    width: 100%;
    transition: opacity 1000ms;
    .content {
        position: absolute;
        width: 100%;
        padding-right: 350px;
        display: flex;
        top: 120px;
        flex-direction: column;
        justify-content: center;
    }
    .image {
        position: absolute;
        display: flex;
        align-items: flex-end;
        right: -35px;
        top: 0;
        bottom: 0;
        img {
            max-height: 500px;
            box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
    }
    .name-container {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        h3 {
            font-size: 1.5rem;
            padding-right: 1rem;
        }
        p {
            font-size: 1.5rem;
            color: var(--grayish-blue);
        }
    }
    @media (max-width: 639px) {
        flex-direction: column;
        position: absolute;
        .content {
            top: 0;
            left: 0;
            right: 0;
            margin: auto;
            align-items: flex-start;
            position: relative;
            padding-right: 0;
            margin-top: 1rem;
            p {
                font-size: 1rem;
                font-weight: 300;
                text-align: center;
            }
        }
        .name-container {
            flex-direction: column;
            width: 100%;
            justify-content: center;
            h3,
            p {
                font-size: 1rem;
            }
        }
        .image {
            top: 50px;
            left: 0;
            right: 0;
            margin: auto;
            align-items: flex-start;
            position: relative;
        }
        img {
            width: 275px;
            height: 275px;
        }
    }
`;

export default Slide;
