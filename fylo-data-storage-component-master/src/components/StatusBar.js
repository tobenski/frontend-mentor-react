import React from 'react';
import styled from 'styled-components';

const StatusBar = () => {
    return (
        <Wrapper>
            <p>
                You’ve used <strong>815 GB</strong> of your storage
            </p>
            <div className='progress-bg'>
                <div className='progress'>
                    <div className='ball'></div>
                </div>
            </div>
            <div className='size-wrapper'>
                <div>0 GB</div>
                <div>1000 GB</div>
            </div>
            <div className='size-container'>
                <span>185</span>
                GB LEFT
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: var(--dark-blue);
    margin-top: 1rem;
    border-radius: 15px;
    width: 85%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: var(--pale-blue);
    position: relative;
    p {
        margin-bottom: 1rem;
        width: 100%;
        text-align: center;
    }
    .progress-bg {
        width: 100%;
        height: 18px;
        background: var(--very-dark-blue);
        border-radius: 4rem;
        display: flex;
        align-items: center;
        padding-left: 3px;
    }
    .progress {
        position: relative;
        transition: all 0.7s ease-in-out;
        background: linear-gradient(
            to right,
            hsl(6, 100%, 80%),
            hsl(335, 100%, 65%)
        );
        height: 12px;
        width: 81.5%;
        border-radius: 4rem;
    }
    .ball {
        position: absolute;
        border-radius: 50%;
        background: white;
        width: 11px;
        height: 11px;
        right: 0;
    }
    .size-wrapper {
        margin-top: 0.5rem;
        font-weight: 700;
        font-size: 0.8rem;
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    .size-container {
        position: absolute;
        bottom: -50px;
        left: 25%;
        right: 25%;
        margin: auto;
        display: flex;
        align-items: center;
        background-color: var(--pale-blue);
        color: var(--very-dark-blue);
        padding: 0.5rem 1rem;
        border-radius: 10px;
        span {
            font-size: 3rem;
            color: var(--ver-dark-blue);
            font-weight: 700;
            padding-right: 1rem;
        }
    }
    @media (min-width: 640px) {
        width: 40%;
        margin-left: 1rem;
        .size-container {
            bottom: initial;
            top: -40%;
            right: 40px;
            left: initial;
            border-bottom-right-radius: 0;
        }
        .size-container::after {
            content: ' ';
            position: absolute;
            top: 98%; /* At the bottom of the tooltip */
            right: 0px;
            bottom: -30px;

            border: 15px solid;
            border-color: var(--pale-blue) var(--pale-blue) transparent
                transparent;
        }
    }
`;

export default StatusBar;
