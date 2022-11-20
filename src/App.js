import './App.css';
import PageLayout from './components/Pagelayout/Pagelayout';
import { Routes, Route,Navigate } from "react-router-dom";
import Signuppage from './components/Signuppage/Signuppage';
import Loginpage from './components/Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <Routes>   
        <Route path="/stlap/login" element={ <Loginpage/> } />        
        <Route path="/stlap/signup" element={ <Signuppage/> } />
        <Route path="/stlap/home" element={ <PageLayout/> } />
        <Route path="/" exact element={<Navigate to ='/stlap/login' /> } />        
        <Route path="*" exact element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
