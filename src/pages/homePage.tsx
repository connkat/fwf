import fwf from "../assets/fwf.jpeg";

function HomePage() {
  return (
    <div className="Home">
      <div className="left">
        <h2>Does it even exist???</h2>
      </div>
      <div className="center">
        <div className="img-wrapper">
          <img src={fwf} alt="darcy" className="darcy" />
        </div>
        <h4>(don't worry FWF pals, I promise to make you a real website)</h4>
      </div>
      <div className="right">
        <h2>Why no ring???</h2>
      </div>
    </div>
  );
}

export default HomePage;
