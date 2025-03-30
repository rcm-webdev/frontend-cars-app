import "./App.css";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-base-200">
      <Navbar />
      <Hero />
      <Carousel />
    </div>
  );
}

export default App;
