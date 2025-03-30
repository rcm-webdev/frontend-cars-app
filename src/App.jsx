import "./App.css";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollDown from "./components/ScrollDown";
function App() {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Hero />
      <ScrollDown />
      <Timeline />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
