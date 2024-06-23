import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShrimp } from "@fortawesome/free-solid-svg-icons";
library.add(faShrimp);
import { useNavigate } from "react-router-dom";
import MusicPlayer from "./MusicPlayer";
import logo from "../assets/logo.jpg";

function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar-container w-[25%] h-full flex flex-col gap-2">
      <div className="nav-bar flex flex-col justify-center gap-5 px-14 py-10 mx-2 mt-2  bg-cyan-700/40 rounded-md">
        <div className="logo-container bg-red-400 flex flex-row items-center px-2 py-2 rounded-2xl gap-4">
          <img className="w-[50px]" src={logo} />
          <h1 className="logo-title text-2xl text-blue-300">ORANGE MUSIC</h1>
        </div>

        <a
          className="login-option text-xl text-center"
          onClick={() => navigate("/")}
        >
          LOG IN
        </a>
      </div>
      <MusicPlayer />
    </div>
  );
}

export default SideBar;
