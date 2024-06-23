import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header flex flex-row justify-end mr-3 my-2 px-5 py-5 bg-cyan-950/40 rounded-md">
      <label htmlFor="seach">SEARCH</label>
      <input className="ml-5 rounded-sm" name="search" type="text" value={""} />
    </header>
  );
}

export default Header;
