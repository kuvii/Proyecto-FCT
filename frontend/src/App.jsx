import './App.css';
import KingsbankApp from './app/KingsbankApp';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <KingsbankApp/>
    </BrowserRouter>
  );
}

export default App;
