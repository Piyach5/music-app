import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
