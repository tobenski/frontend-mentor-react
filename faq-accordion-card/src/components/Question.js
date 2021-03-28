import React from 'react';
import styled from 'styled-components';
import arrow from '../images/icon-arrow-down.svg';

const Question = ({ question, answer }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <Wrapper>
            <h3
                className={`${open && 'open'}`}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {question}
                <span>
                    <img
                        src={arrow}
                        alt='arrow'
                        className={`${open && 'flipped'}`}
                    />
                </span>
            </h3>
            {open && <p>{answer}</p>}
        </Wrapper>
    );
};

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    border-bottom-color: var(--light-grayish-blue);
    border-bottom-style: solid;
    border-bottom-width: 1px;
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
    h3 {
        margin-bottom: 1rem;
        font-weight: 400;
        cursor: pointer;
        span {
            float: right;
        }
    }
    h3:hover {
        color: var(--soft-red);
    }
    h3.open {
        font-weight: 700;
    }
    p {
        margin-bottom: 1rem;
    }
    img.flipped {
        transform: scaleY(-1);
    }
`;

export default Question;
