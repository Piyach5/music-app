import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ArtistsContext = createContext();
export const ArtistIDContext = createContext();

function HomePage() {
  const [artists, setArtists] = useState([]);
  const [artistID, setArtistId] = useState(1);

  const getArtists = async () => {
    try {
      const res = await axios("http://localhost:4000/artists");
      setArtists(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArtists();
  }, []);

  return (
    <ArtistsContext.Provider value={artists}>
      <ArtistIDContext.Provider value={artistID}>
        <main className="flex flex-row">
          <SideBar />
          <div className="main-container w-[75%] h-screen">
            <div className="header">
              <Header />
            </div>
            <div className="content h-[85%] overflow-scroll overflow-x-hidden">
              <div className="mainContent-container p-5">
                <h2 className="title text-4xl">ARTISTS</h2>
                <div className="artist-card-list flex flex-wrap px-16 py-5">
                  {artists.map(({ name, image, id }) => {
                    return (
                      <div
                        className="artist-card flex flex-col items-center gap-2 p-5"
                        key={id}
                      >
                        <button
                          className="cursor-pointer"
                          onClick={() => setArtistId(id)}
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
          </div>
        </main>
      </ArtistIDContext.Provider>
    </ArtistsContext.Provider>
  );
}

export default HomePage;
