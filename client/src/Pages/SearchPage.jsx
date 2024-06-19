function SearchPage() {
  return (
    <main className="main-container flex flex-row">
      <div className="sidebar-container w-[25%] h-full flex flex-col gap-2">
        <SideBar />
        <MusicPlayer />
      </div>
      <div className="main-content-container w-[75%] h-screen">
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

export default SearchPage;
