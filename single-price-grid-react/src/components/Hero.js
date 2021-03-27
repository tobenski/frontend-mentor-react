import React from 'react';
import styled from 'styled-components';

const Hero = () => {
    return (
        <Wrapper>
            <h2>Join our community</h2>
            <h3>30-day, hassle-free money back guarantee</h3>
            <p>
                Gain access to our full library of tutorials along with expert
                code reviews. Perfect for any developers who are serious about
                honing their skills.
            </p>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    padding: 2rem 1.25rem;

    h2 {
        color: var(--cyan);
        margin-bottom: 1.5rem;
    }
    h3 {
        color: var(--bright-yellow);
        margin-bottom: 1.5rem;
    }
    p {
        color: rgba(152, 166, 189, 0.6);
        font-weight: 600;
        line-height: 2;
        letter-spacing: -0.05em;
    }

    @media (min-width: 640px) {
        grid-column: span 2 / span 2;
    }
`;

export default Hero;
