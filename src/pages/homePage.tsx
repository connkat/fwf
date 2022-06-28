import fwf from "../assets/fwf.jpeg";

function HomePage() {
  return (
    <div className="Home">
      <div className="left">
        <h4>Does it even exist???</h4>
      </div>
      <div className="img-wrapper">
        <img src={fwf} alt="darcy" className="darcy" />
      </div>
      <div className="right">
        <h4>Why no ring???</h4>
      </div>
    </div>
  );
}

export default HomePage;
