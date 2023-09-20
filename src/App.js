import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing Page';
import Login from './Pages/Login Page';
import Signup from './Pages/Signup Page';
import Profile from './Pages/Profile Page';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path= "/" element={<Landing/>} />
        <Route path= "/login" element={<Login/>} />
        <Route path= "/signup" element={<Signup/>} />
        <Route path= "/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
