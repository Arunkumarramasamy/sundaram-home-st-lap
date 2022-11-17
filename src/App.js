import './App.css';
import { Loginpage } from './components/Loginpage/Loginpage';
import { Pagelayout } from './components/Pagelayout/Pagelayout';
import { Signuppage } from './components/Signuppage/Signuppage';
import { Routes, Route,Navigate } from "react-router-dom"

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
