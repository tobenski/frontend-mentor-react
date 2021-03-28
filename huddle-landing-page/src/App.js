import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Mockups from './components/Mockups';
import SocialIcons from './components/SocialIcons';
import Hero from './components/Hero';

function App() {
	return (
		<Wrapper className='App'>
			<Header />
			<main>
				<Mockups />
				<Hero />
			</main>
			<SocialIcons />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	min-height: 100vh;
	width: 100vw;
	padding: 2rem;
	main {
		padding-top: 2rem;
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		row-gap: 4rem;
		column-gap: 6rem;
	}

	@media (min-width: 640px) {
		padding: 3rem;
		height: 100vh;
		overflow: hidden;
		main {
			padding: 1rem;
			margin-top: 6rem;
			grid-template-columns: repeat(12, minmax(0, 1fr));
		}
	}
`;

export default App;
