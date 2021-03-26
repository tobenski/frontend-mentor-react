import './App.css';
import SocialProof from './components/SocialProof';
import styled from 'styled-components';
import desktopTop from './images/bg-pattern-top-desktop.svg';
import desktopBottom from './images/bg-pattern-bottom-desktop.svg';
import mobileTop from './images/bg-pattern-top-mobile.svg';
import mobileBottom from './images/bg-pattern-bottom-mobile.svg';

function App() {
	return (
		<Wrapper>
			<SocialProof />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${desktopTop}), url(${desktopBottom});
	background-position: top left, bottom right;
	background-repeat: no-repeat;

	background-color: var(--white);

	@media (max-width: 480px) {
		background-image: url(${mobileTop}), url(${mobileBottom});
		background-position: top left, bottom right;
	}
`;

export default App;
