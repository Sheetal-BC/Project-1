import "./Main.css";

const Main = () => {
  return (
    <div className="containers" id="main">
      <div className="container-img">
        <img src={process.env.PUBLIC_URL + "real.jpg"} alt="building" />
      </div>
      <div className="container-texts">
        <h1 className="title1">
          JOIN OUR <br />
          TRIBE
        </h1>
        <p className="titletwo">
          Let's join our efforts towards <br /> building the unshakable <br />{" "}
          foundation for better <br /> tommorow.{" "}
        </p>
      </div>
    </div>
  );
};

export default Main;
