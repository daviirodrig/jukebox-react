import Footer from "./Footer";
import SongPage from './SongPage/SongPage';
import TopBar from "./TopBar";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <TopBar />
        <main className="bg-[#2B3E50] flex-grow h-full flex content-center items-center text-center">
          <SongPage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
