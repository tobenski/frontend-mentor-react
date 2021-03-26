import React from 'react';
import styled from 'styled-components';

const Review = ({ name, verified, text, image, index }) => {
	const top = `${index * 20}px`;
	return (
		<Wrapper style={{ marginTop: top }}>
			<div className='header'>
				<img src={image} alt={name} />
				<div>
					<h4>{name}</h4>
					<h5>{verified && 'Verified '} Buyer</h5>
				</div>
			</div>
			<p>"{text}"</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	height: 225px;
	width: 33%;
	background-color: var(--very-dark-magenta);
	margin-left: 20px;
	margin-right: 20px;
	padding: 20px;
	border-radius: 10px;

	.header {
		display: flex;
		align-items: center;
		margin-bottom: 25px;
		img {
			border-radius: 50%;
			width: 50px;
		}
		div {
			height: 100%;
			align-items: left;
			display: flex;
			flex-direction: column;
			padding-left: 25px;
		}
	}

	h4 {
		color: var(--white);
	}
	h5 {
		color: var(--soft-pink);
		font-weight: 400;
	}
	p {
		color: var(--light-grayish-magenta);
		line-height: 1.5;
	}

	@media (max-width: 480px) {
		width: 90%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 20px !important;
	}
`;

export default Review;
