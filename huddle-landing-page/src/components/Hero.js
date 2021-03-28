import React from 'react';
import styled from 'styled-components';

const Hero = () => {
	return (
		<Wrapper>
			<h1>Build The Community Your Fans Will Love</h1>
			<p>
				Huddle re-imagines the way we build communities. You have a
				voice, but so does your audience. Create connections with your
				users as you engage in genuine discussion.
			</p>
			<button>Register</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 0.25rem;
	align-items: center;
	h1 {
		font-size: 1.5rem;
		color: white;
		margin-bottom: 1.5rem;
	}
	p {
		color: white;
		font-weight: 400;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}
	button {
		border: none;
		border-radius: 25px;
		padding: 1rem;
		color: var(--violet);
		font-weight: 600;
		width: 250px;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	}

	@media (min-width: 640px) {
		align-items: left;
		text-align: left;
		grid-column: span 4 / span 4;
		h1 {
			font-size: 3rem;
		}
		p {
			line-height: 2;
		}
	}
`;

export default Hero;
