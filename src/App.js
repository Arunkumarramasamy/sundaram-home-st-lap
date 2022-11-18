import './App.css';
import PageLayout from './components/Pagelayout/PageLayout';
import { Routes, Route,Navigate } from "react-router-dom";
import Signuppage from './components/Signuppage/Signuppage';
import Loginpage from './components/Loginpage/Loginpage';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <Loginpage/> } />     
        <Route path="/stlap/login" element={ <Loginpage/> } />        
        <Route path="/stlap/signup" element={ <Signuppage/> } />
        <Route path="/stlap" element={ <PageLayout/> } />
        <Route path="*" exact={true} element={ <Loginpage /> } />
      </Routes>
    </div>
  );
}

export default App;
