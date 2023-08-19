import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
    /* <div className="App">
  
      <Register />
    </div> */
  );
}

export default App;
