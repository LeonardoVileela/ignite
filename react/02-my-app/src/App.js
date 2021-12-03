import './App.css';
import { Counter } from './components/Counter';
import { RepositoryList } from './components/RespositoryList';
import './style/global.scss';

function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}

export default App;
