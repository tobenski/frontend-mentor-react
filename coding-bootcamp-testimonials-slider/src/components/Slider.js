import React from 'react';
import styled from 'styled-components';
import slides from '../data/data';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import bgPattern from '../images/pattern-bg.svg';
import curvePattern from '../images/pattern-curve.svg';
import quotesPattern from '../images/pattern-quotes.svg';
import Slide from './Slide';

const Slider = () => {
    return (
        <Wrapper>
            {slides.map((slide) => {
                return <Slide key={slide.id} {...slide} />;
            })}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    position: relative;
`;

export default Slider;
