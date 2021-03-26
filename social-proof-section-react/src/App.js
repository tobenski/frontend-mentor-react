import './App.css';
import SocialProof from './components/SocialProof';
import styled from 'styled-components';

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
`;

export default App;
