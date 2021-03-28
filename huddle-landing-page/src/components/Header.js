import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.svg';

const Header = () => {
	return (
		<Wrapper>
			<img src={logo} alt='Huddle' />
		</Wrapper>
	);
};

const Wrapper = styled.header`
	display: flex;

	img {
		height: 2.5rem;
	}

	@media (min-width: 640px) {
		img {
			height: auto;
		}
	}
`;

export default Header;
