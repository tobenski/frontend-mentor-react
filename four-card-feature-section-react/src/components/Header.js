import React from 'react';
import styled from 'styled-components';
import { header } from '../data/data';

const Header = () => {
	const { main, sub, content } = header;
	return (
		<Wrapper>
			<h1>{main}</h1>
			<h2>{sub}</h2>
			<p>{content}</p>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	max-width: 350px;
	width: 100%100vh;
	margin-bottom: 2rem;

	h1 {
		font-size: 2rem;
		font-weight: 200;
		color: var(--grayish-blue);
	}
	h2 {
		font-size: 2rem;
		color: var(--very-dark-blue);
	}
	p {
		color: var(--grayish-blue);
		margin-top: 1rem;
	}

	@media (min-width: 480px) {
		max-width: 500px;
	}
`;

export default Header;
