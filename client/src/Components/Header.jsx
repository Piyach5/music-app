import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header flex flex-row justify-between mr-3 my-2 px-5 py-5 bg-cyan-950/40 rounded-md">
      <div></div>
      <div className="login-options flex flex-row gap-5">
        <a onClick={() => navigate("/signup")}>SIGN UP</a>
        <a onClick={() => navigate("/login")}>LOG IN</a>
      </div>
    </header>
  );
}

export default Header;
