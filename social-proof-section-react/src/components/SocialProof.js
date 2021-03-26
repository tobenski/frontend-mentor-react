import React from 'react';
import styled from 'styled-components';
import { heading, ratings, reviews } from '../data/data';
import Heading from './Heading';
import Rating from './Rating';
import Review from './Review';

const SocialProof = () => {
	return (
		<Wrapper>
			<Heading id='heading' {...heading} />
			<div id='ratings'>
				{ratings.map((rating, index) => {
					return <Rating key={index} {...rating} index={index} />;
				})}
			</div>
			<div id='reviews'>
				{reviews.map((review, index) => {
					return <Review key={index} {...review} index={index} />;
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.main`
	height: 80vh;
	width: 80vw;

	display: grid;
	place-items: center;
	row-gap: 50px;
	grid-template-areas:
		'heading ratings'
		'reviews reviews';

	#heading {
		grid-area: heading;
	}

	#reviews {
		grid-area: reviews;
		display: flex;
	}

	#ratings {
		grid-area: ratings;
	}

	@media (max-width: 480px) {
		padding-top: 100px;
		min-height: 100vh;
		width: 100vw;
		overflow: auto;
		grid-template-areas:
			'heading'
			'ratings'
			'reviews';

		#reviews {
			flex-direction: column;
		}
	}
`;

export default SocialProof;
