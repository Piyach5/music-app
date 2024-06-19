import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlay,
  faPause,
  faBackward,
  faForward,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
library.add(faPlay, faPause, faBackward, faForward);
import album_cover_ok_computer from "../assets/album_cover/album_cover_ok_computer.jpg";
import { useState } from "react";

function MusicPlayer() {
  const [isPlay, setIsPlay] = useState(false);

  const PlayAndPause = (isPlay) => {
    if (isPlay == false) {
      return (
        <FontAwesomeIcon className="text-2xl mr-3" icon="fa-solid fa-play" />
      );
    } else {
      return (
        <FontAwesomeIcon className="text-2xl mr-3" icon="fa-solid fa-pause" />
      );
    }
  };

  return (
    <div className="music-player flex flex-col justify-center items-center gap-5 px-2 py-10 mx-2 bg-cyan-950/40 rounded-md">
      <img
        className="album-cover w-[200px] h-[190px] p-2"
        src={album_cover_ok_computer}
      />
      <div className="song-info">
        <span className="song-title">NO SURPRISES</span>
        <span className="artist-title">-RADIOHEAD</span>
      </div>
      <div className="music-player-container">
        <button>
          <FontAwesomeIcon
            className="text-2xl mr-3"
            icon="fa-solid fa-backward"
          />
        </button>
        <button onClick={() => setIsPlay(!isPlay)}>
          {PlayAndPause(isPlay)}
        </button>
        <button>
          <FontAwesomeIcon
            className="text-2xl mr-3"
            icon="fa-solid fa-forward"
          />
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;
