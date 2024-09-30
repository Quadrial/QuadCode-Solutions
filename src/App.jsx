import Header from "./Header/Header";
import { Portfolio } from "./Portfolio/Portfolio";
import { Footer } from "./Footer/Footer";
import { Element } from "react-scroll";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Element
        name="homeSection"
        className="lg:px-[250px] md:px-[100px] px-[30px]"
      >
        <Portfolio />
      </Element>
      <Footer />
    </>
  );
}

export default App;
