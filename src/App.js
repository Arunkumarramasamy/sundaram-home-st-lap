import './App.css';
import PageLayout from './components/Pagelayout/Pagelayout';
import { Routes, Route,Navigate } from "react-router-dom";
import Signuppage from './components/Signuppage/Signuppage';
import Loginpage from './components/Loginpage/Loginpage';
import DisbursementRequestPage from './components/DisbursementRequest/DisbursementRequestPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <PageLayout/> } />
        <Route path="/login" element={ <Loginpage/> } />        
        <Route path="/signup" element={ <Signuppage/> } />
        <Route path="/disbursementRequest" element={ <DisbursementRequestPage /> } />
        <Route path="*" element={ <Navigate to="/login"/> } />
      </Routes>
    </div>
  );
}

export default App;
