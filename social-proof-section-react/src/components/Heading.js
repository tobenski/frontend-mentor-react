import React from 'react';
import styled from 'styled-components';

const Heading = ({ main, sub }) => {
	return (
		<Wrapper>
			<h1>{main}</h1>
			<p>{sub}</p>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	width: 80%;

	margin: auto;
	h1 {
		font-size: 2rem;
		color: var(--very-dark-magenta);
	}
	p {
		font-size: 0.9rem;
		color: var(--dark-grayish-magenta);
		font-weight: 700;
		line-height: 1.8;
	}
	/* Desktop */
	@media (min-width: 1440px) {
		width: 500px;
		padding: 10px;
		h1 {
			margin-bottom: 2rem;
			font-size: 3rem;
		}
	}
`;

export default Heading;
