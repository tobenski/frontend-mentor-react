import React from 'react';
import styled from 'styled-components';

const Subscription = () => {
	const [show, setShow] = React.useState(false);
	return (
		<Wrapper>
			<h3>Monthly Subscription</h3>
			<h4>
				$29
				<span>per month</span>
			</h4>
			<p>Full access for less than $1 a day</p>
			<button
				href='#'
				onMouseOver={() => {
					setShow(true);
				}}
				onMouseOut={() => {
					setShow(false);
				}}>
				Sign Up
				{show && (
					<div className='tooltiptext'>
						Click to Sign up for the Monthly Subscription
					</div>
				)}
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* grid-column: span 1 / span 1; */
	width: 100%;
	background-color: rgba(42, 178, 175, 1);
	color: white;
	padding: 2rem 1.25rem;

	/* Tooltip text */
	.tooltiptext {
		width: 360px;
		background-color: black;
		color: #fff;
		text-align: center;
		padding: 5px 0;
		border-radius: 6px;

		bottom: 100%;
		left: 50%;
		margin-left: -180px;
		position: absolute;
		z-index: 1;
	}
	.tooltiptext::after {
		content: ' ';
		position: absolute;
		top: 100%; /* At the bottom of the tooltip */
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: black transparent transparent transparent;
	}

	h3 {
		margin-bottom: 1.5rem;
	}
	h4 {
		font-size: 2rem;
		display: flex;
		align-items: center;
		margin-bottom: 1.5rem;
		span {
			font-size: 1rem;
			color: var(--light-gray);
			padding-left: 0.5rem;
		}
	}
	p {
		margin-bottom: 3.25rem;
	}
	button {
		width: 100%;
		padding: 1rem;
		border: 0;
		background-color: var(--bright-yellow);
		color: white;
		font-weight: 700;
		border-radius: var(--border-radius);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		position: relative;
	}

	@media (min-width: 640px) {
		border-bottom-left-radius: var(--border-radius);
	}
`;

export default Subscription;
