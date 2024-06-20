import { useState, useEffect } from "react";
import axios from "axios";

function Content() {
  const [topList, setToplist] = useState([]);

  const getTopList = async () => {
    try {
      const response = await axios(
        "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f75adbfe975bfab18b02ad91c9db935c&format=json&limit=5"
      );
      console.log(response.data.artists.artist);
      setToplist(response.data.artists.artist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopList();
  }, []);

  return (
    <div className="mainContent-container p-5">
      <h2 className="title text-4xl">TOP ARTISTS</h2>
      <div className="artist-card-list flex flex-row">
        {topList.map((item) => {
          return (
            <div className="artist-card flex flex-col items-center gap-2 p-5">
              <img
                className="artist-img w-[150px] h-[150px] rounded-full"
                src={item.image[1]["#text"]}
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content;
