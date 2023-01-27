import "./App.css";
import PageLayout from "./components/Pagelayout/Pagelayout";
import { Routes, Route, Navigate } from "react-router-dom";
import Loginpage from "./components/Loginpage/Loginpage";
import EnachLogin from "./components/EnachLoginpage/Loginpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/stlap/login" element={<Loginpage />} />
        <Route path="/stlap/enachLogin" element={<EnachLogin />} />
        <Route path="/stlap/home" element={<PageLayout />} />
        <Route path="/" exact element={<Navigate to="/stlap/login"  replace/>} />
        <Route path="*" exact element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
