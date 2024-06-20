import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import Content from "../Components/Content";

function HomePage() {
  return (
    <main className="flex flex-row">
      <SideBar />
      <div className="main-container w-[75%] h-screen">
        <div className="header">
          <Header />
        </div>
        <div className="content h-[85%] overflow-scroll overflow-x-hidden">
          <Content />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
