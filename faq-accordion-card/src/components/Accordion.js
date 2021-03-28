import React from 'react';
import questions from '../data/data';
import styled from 'styled-components';
import Question from './Question';

const Accordion = () => {
    return (
        <Wrapper>
            {questions.map((q, i) => {
                return <Question key={i} {...q} />;
            })}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
`;

export default Accordion;
