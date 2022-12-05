import "./App.css";
import PageLayout from "./components/Pagelayout/Pagelayout";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/Loginpage/LoginPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/stlap/login" element={<LoginPage />} />
        <Route path="/stlap/home" element={<PageLayout />} />
        <Route path="/" exact element={<Navigate to="/stlap/login" />} />
        <Route path="*" exact element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
