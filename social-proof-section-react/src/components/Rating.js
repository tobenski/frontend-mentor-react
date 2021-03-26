import React from 'react';
import styled from 'styled-components';
import star from '../images/icon-star.svg';

const Rating = ({ stars, text, index }) => {
	const margin = `${index * 50}px`;
	const starArray = [...Array(stars)].map((e, i) => (
		<img src={star} alt='star' className='star' key={i} />
	));
	return (
		<Wrapper style={{ marginLeft: margin }}>
			<div className='star-wrapper'>
				{starArray.map((star) => {
					return star;
				})}
			</div>
			<div className='content'>
				<p>{text}</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background-color: var(--light-grayish-magenta);
	width: 500px;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	padding: 20px;
	border-radius: 5px;
	.star-wrapper {
		width: 200px;
	}
	.star {
		margin: 5px;
	}
	.content {
		width: 100%;
		font-weight: 700;
		text-align: center;
	}
	@media (max-width: 480px) {
		width: 100%;

		flex-direction: column;
		margin-left: auto !important;
		margin-right: auto;
		text-align: center;
	}
`;

export default Rating;
