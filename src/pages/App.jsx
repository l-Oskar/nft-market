import Header from "./Header";
import ThemeToggle from "../utils/ThemeToggle";
import MainSection from "./MainSection";
import Footer from "./Footer";
import About from "./About";
import Mint from "./Mint";

function App() {
  return (
    <>
      <div className="bg-fuchsia-800">
        <Header />
      </div>
      <MainSection />
      <About />
      <Mint />
      <div className="bg-fuchsia-700">
        <Footer />
      </div>
    </>
  );
}

export default App;
