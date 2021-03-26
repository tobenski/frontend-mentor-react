import React from 'react';
import styled from 'styled-components';
import { cards } from '../data/data';
import Card from './Card';

const Cards = () => {
	return (
		<Wrapper>
			{cards.map((card, index) => {
				return <Card key={index} {...card} />;
			})}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	max-width: 95%;
	margin: auto;
	display: grid;
	place-items: center;
	row-gap: 2rem;
	grid-template-areas: 'supervisor' 'teambuilder' 'karma' 'calculator';

	@media (min-width: 480px) {
		grid-template-areas:
			'supervisor teambuilder calculator'
			'supervisor karma calculator';
		gap: 2rem;
		max-width: 80%;
	}
`;

export default Cards;
