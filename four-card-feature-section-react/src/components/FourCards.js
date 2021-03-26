import React from 'react';
import styled from 'styled-components';
import Cards from './Cards';
import Header from './Header';

const FourCards = () => {
	return (
		<Wrapper>
			<Header />
			<Cards />
		</Wrapper>
	);
};

const Wrapper = styled.main`
	background-color: var(--very-light-gray);
	width: 100vw;
	min-height: 100vh;
	/* overflow-x: hidden; */

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	/* Desktop */
	@media (min-width: 480px) {
		align-items: center;
		height: 100vh;
		max-height: 100vh;
		padding: 0;
	}
`;

export default FourCards;
