import React from 'react';
import styled from 'styled-components';

const Card = ({ type, name, content, icon, color }) => {
	return (
		<Wrapper type={`${type}`} color={`--${color}`}>
			<h3>{name}</h3>
			<p>{content}</p>
			<img src={icon} alt={name} />
		</Wrapper>
	);
};

const Wrapper = styled.article`
	border-top-color: var(${(props) => props.color});
	border-top-width: 4px;
	border-top-style: solid;
	border-radius: 5px;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	grid-area: ${(props) => props.type};
	width: 100%;
	padding: 1.5rem;
	h3 {
		font-size: 1.25rem;
		margin-bottom: 10px;
		text-align: left;
	}
	p {
		text-align: left;
		margin-bottom: 10px;
	}
	img {
		float: right;
	}

	@media (min-width: 480px) {
	}
`;

export default Card;
