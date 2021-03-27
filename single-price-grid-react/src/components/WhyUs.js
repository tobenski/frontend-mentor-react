import React from 'react';
import styled from 'styled-components';

const WhyUs = () => {
    return (
        <Wrapper>
            <h3>Why Us</h3>
            <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer & expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    /* grid-column: span 1 / span 1; */
    width: 100%;

    background-color: rgba(42, 178, 175, 0.75);

    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);

    @media (min-width: 640px) {
        border-bottom-left-radius: 0px;
    }
`;

export default WhyUs;
