import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import useFetch from "../Customhooks/useFetch";
import { createContext, useState } from "react";

export const ArtistIdContext = createContext();

function HomePage() {
  const [artistId, setArtistId] = useState(1);
  const [searchText, setSearchText] = useState("");

  const artists = useFetch(
    `http://musicapp-api-service-production.up.railway.app/artists?name=${searchText}`,
    searchText
  );

  const handleChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value);
  };

  return (
    <ArtistIdContext.Provider value={artistId}>
      <main className="flex flex-row">
        <SideBar />
        <div className="main-container w-[60%] h-screen">
          <Header onChange={handleChange} value={searchText} />
          <div className="mainContent-container bg-gradient-to-r from-pink-100/40 to-pink-300/40 to-pink-500/40 h-[85%] overflow-scroll overflow-x-hidden rounded-md">
            <h1 className="title text-4xl mx-28 my-5">ARTISTS</h1>
            <div className="artist-card-list flex flex-wrap justify-center px-16">
              {artists.map(({ name, image, artist_id }) => {
                return (
                  <div
                    className="artist-card flex flex-col items-center gap-2 p-5"
                    key={artist_id}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => setArtistId(artist_id)}
                    >
                      <img
                        className="artist-img w-[150px] h-[150px] rounded-full"
                        src={image}
                      />
                    </button>
                    <p className="uppercase">{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </ArtistIdContext.Provider>
  );
}

export default HomePage;
