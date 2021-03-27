import React from 'react';
import Hero from './Hero';
import Subscription from './Subscription';
import WhyUs from './WhyUs';
import styled from 'styled-components';

const PriceGrid = () => {
    return (
        <Wrapper>
            <Hero />
            <Subscription />
            <WhyUs />
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: grid;
    margin-top: 4rem;
    margin-bottom: 4rem;
    height: 100%;
    width: 90%;
    background-color: white;
    font-family: 'Karla', sans-serif;
    color: var(--grayish-blue);
    border-radius: var(--border-radius);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    @media (min-width: 640px) {
        max-width: 580px;
        margin-top: 0px;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export default PriceGrid;
