import './App.css';
import styled from 'styled-components';
import ArticleCard from './components/ArticleCard';

function App() {
    return (
        <Main className='App'>
            <ArticleCard />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    min-height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

export default App;
