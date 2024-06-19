import billie_eilish from "../assets/artist_img/billie_eilish.jpg";
import wallows from "../assets/artist_img/wallows.jpg";
import taylor_swift from "../assets/artist_img/taylor_swift.jpg";
import laufey from "../assets/artist_img/laufey.jpg";

function Content() {
  return (
    <div className="mainContent-container p-5">
      <h2 className="title text-4xl">TRENDING</h2>
      <div className="artist-card-list flex flex-row">
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={billie_eilish}
          />
          <p>Billie Eilish</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={wallows}
          />
          <p>Wallows</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={taylor_swift}
          />
          <p>Taylor Swift</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={laufey}
          />
          <p>Laufey</p>
        </div>
      </div>
      <h2 className="title text-4xl">Your Favourites</h2>
      <div className="artist-card-list flex flex-row">
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={billie_eilish}
          />
          <p>Billie Eilish</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={wallows}
          />
          <p>Wallows</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={taylor_swift}
          />
          <p>Taylor Swift</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={laufey}
          />
          <p>Laufey</p>
        </div>
      </div>
      <h2 className="title text-4xl">TRENDING</h2>
      <div className="artist-card-list flex flex-row">
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={billie_eilish}
          />
          <p>Billie Eilish</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={wallows}
          />
          <p>Wallows</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={taylor_swift}
          />
          <p>Taylor Swift</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={laufey}
          />
          <p>Laufey</p>
        </div>
      </div>
      <h2 className="title text-4xl">Your Favourites</h2>
      <div className="artist-card-list flex flex-row">
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={billie_eilish}
          />
          <p>Billie Eilish</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={wallows}
          />
          <p>Wallows</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={taylor_swift}
          />
          <p>Taylor Swift</p>
        </div>
        <div className="artist-card flex flex-col items-center gap-2 p-5">
          <img
            className="artist-img w-[180px] h-[180px] rounded-full"
            src={laufey}
          />
          <p>Laufey</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
