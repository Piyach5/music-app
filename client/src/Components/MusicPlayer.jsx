import { useContext } from "react";
import { ArtistsContext } from "../Pages/HomePage";
import { ArtistIDContext } from "../Pages/HomePage";

function MusicPlayer() {
  const artists = useContext(ArtistsContext);
  const artistID = useContext(ArtistIDContext);

  return (
    <div className="music-player flex flex-col justify-center items-center gap-5 pt-10 mx-2 my-2 bg-cyan-700/40 rounded-md">
      <img
        className="album-cover w-[200px] h-[190px] p-2"
        src={artists
          .filter(({ id }) => id == artistID)
          .map(({ album }) => album.map((item) => item.albumcover))}
      />
      <div className="album-info max-w-56 uppercase text-center">
        {artists
          .filter(({ id }) => id == artistID)
          .map(({ album }) => album.map((item) => item.title))}
        -
        {artists.map(({ id, name }) => {
          if (id == artistID) {
            return name;
          }
        })}
      </div>
      <iframe
        src={artists
          .filter(({ id }) => id == artistID)
          .map(({ album }) => album.map((item) => item.playlist.src))}
        width="260"
        height="200"
      ></iframe>
    </div>
  );
}

export default MusicPlayer;
