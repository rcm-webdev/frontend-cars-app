import HeroImage from "../../public/hero.webp";

function Carousel() {
  return (
    <div className="max-w-5xl mx-auto flex gap-4 py-5">
      {/* Image 1 */}

      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={HeroImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Image 2 */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={HeroImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
