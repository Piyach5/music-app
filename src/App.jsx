import "./App.css";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LogInPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import HomePagewithProfile from "./Pages/HomePagewithProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<HomePagewithProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
