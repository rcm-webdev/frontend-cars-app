import HeroImage from "../assets/hero.webp";
import FetchButton from "./FetchButton";

function Hero() {
  return (
    <div className="max-w-5xl mx-auto bg-base-200 overflow-x-hidden">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={HeroImage} className="max-w-full rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">The Collection</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <FetchButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
