import React from 'react';
import styled from 'styled-components';
import { heading, ratings, reviews } from '../data/data';
import Heading from './Heading';
import Rating from './Rating';
import Review from './Review';

const SocialProof = () => {
    return (
        <Wrapper>
            <Heading />
            {ratings.map((rating, index) => {
                return <Rating key={index} {...rating} />;
            })}
            {reviews.map((review, index) => {
                return <Review key={index} {...review} />;
            })}
        </Wrapper>
    );
};

const Wrapper = styled.main`
    height: 100vh;
    width: 100vw;
    background-color: var(--white);
`;

export default SocialProof;
