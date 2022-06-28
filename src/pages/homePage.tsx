import fwf from "../assets/fwf.jpeg";

function HomePage() {
  return (
    <div className="Home">
      <div className="left">
        <h2>Does it even exist???</h2>
      </div>
      <div className="img-wrapper">
        <img src={fwf} alt="darcy" className="darcy" />
      </div>
      <div className="right">
        <h2>Why no ring???</h2>
      </div>
    </div>
  );
}

export default HomePage;
