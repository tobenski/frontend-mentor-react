import React from 'react';
import image from '../images/illustration-mockups.svg';
import styled from 'styled-components';

const Mockups = () => {
	return (
		<Wrapper>
			<img src={image} alt='mockups' />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	img {
		width: 100%;
		height: auto;
	}
	@media (min-width: 640px) {
		grid-column: span 8 / span 8;
	}
`;

export default Mockups;
