import './App.css';
import KingsbankApp from './app/KingsbankApp';
import { BrowserRouter } from 'react-router-dom'
import ButtonCreateUser from './components/buttonCreateUser/ButtonCreateUser';

function App() {
  return (
    // <BrowserRouter>
    //   <KingsbankApp/>
    // </BrowserRouter>
    <ButtonCreateUser/>
  );
}

export default App;
