import "./Home.scss";
import Navbar from "./Sidebar/Sidebar";
import backgroundVideo from "../Assets/backgroundClip_lowBitrate2.mp4";

const Home = () => {
  return (
    <div className="background-container" style={{ touchAction: "none" }}>
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
