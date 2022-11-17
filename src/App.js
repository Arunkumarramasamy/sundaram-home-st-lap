import './App.css';
import { Pagelayout } from './components/Pagelayout/Pagelayout';
import { Routes, Route,Navigate } from "react-router-dom";
import Signuppage from './components/Signuppage/Signuppage';
import Loginpage from './components/Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Pagelayout/> } />
        <Route path="/login" element={ <Loginpage/> } />        
        <Route path="/signup" element={ <Signuppage/> } />
        <Route path="/" element={ <Navigate to="/login"/> } />
        <Route path="*" element={ <Navigate to="/login"/> } />
      </Routes>
    </div>
  );
}

export default App;
