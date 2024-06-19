import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faSearch, faMusic } from "@fortawesome/free-solid-svg-icons";
library.add(faHouse, faSearch, faMusic);
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-bar flex flex-col justify-center gap-5 px-14 py-10 mx-2 mt-2  bg-cyan-950/40 rounded-md">
      <h1>
        <FontAwesomeIcon className="text-2xl mr-3" icon="fa-solid fa-music" />
        MUSIC-APP
      </h1>
      <a onClick={() => navigate("/")}>
        <FontAwesomeIcon className="text-2xl mr-3" icon="fa-solid fa-house" />
        HOME
      </a>
      <a onClick={() => navigate("/search")}>
        <FontAwesomeIcon className="text-2xl mr-3" icon="fa-solid fa-search" />
        SEARCH
      </a>
    </div>
  );
}

export default SideBar;
