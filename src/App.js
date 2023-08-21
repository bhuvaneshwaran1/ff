import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import { Dashboard } from './components/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
    /* <div className="App">
  
      <Register />
    </div> */
  );
}

export default App;
