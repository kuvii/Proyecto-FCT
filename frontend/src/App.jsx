import './App.css';
// import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      {/* <Login/> */}
      <Register/>
    </BrowserRouter>
  );
}

export default App;
