import React from 'react';
import styled from 'styled-components';

const Slide = ({ id, name, title, text, image }) => {
    const [active, setActive] = React.useState(false);
    if (id === 1) {
        setActive(true);
    }

    return (
        <Wrapper className={`${active ? 'active' : ''}`}>
            {name}
            {id}
        </Wrapper>
    );
};

const Wrapper = styled.article`
    position: absolute;
    font-size: 2rem;
    opacity: 0;
    .active {
        opacity: 1;
    }
`;

export default Slide;
