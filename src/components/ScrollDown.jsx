import Scroll from "../assets/scroll.svg";

function ScrollDown() {
  return (
    <div className="max-w-5xl mx-auto mb-12 ">
      <img
        src={Scroll}
        alt="scroll-down"
        className="h-24 w-24 mx-auto animate-bounce "
      />
    </div>
  );
}

export default ScrollDown;
