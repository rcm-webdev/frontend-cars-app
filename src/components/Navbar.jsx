import FetchButton from "./FetchButton";

function Navbar() {
  return (
    <div className="bg-neutral">
      <div className="max-w-5xl mx-auto">
        <div className="navbar bg-neutral text-neutral-content justify-between">
          <button className="btn btn-ghost text-3xl font-cooper tracking-wide uppercase">
            <span className="text-[#5d9277]">509</span> Vintage Cars
          </button>
          <FetchButton />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
