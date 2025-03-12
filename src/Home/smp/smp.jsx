import { Typography } from "@mui/material";
import Navbar from "../Sidebar/Sidebar";
import photo1 from "../../Assets/DSC02580.jpg";
import photo2 from "../../Assets/DSC02577.jpg";
import photo3 from "../../Assets/IMG_0796.jpg";
import photo4 from "../../Assets/IMG_0794.jpg";
import "./smp.scss";

const Smp = () => {
  return (
    <div className="smp-container">
      <Navbar />
      <div className="about-smp">
        <div className="left">
          <h2>SMP</h2>
          <Typography>
            Scalp Micropigmentation (SMP) is the cutting-edge hair solution
            that's revolutionizing the game for anyone dealing with thinning
            hair or baldness. Think of it as the ultimate hair tattoo –
            thousands of micro-dots creating that fresh buzz-cut look without
            the commitment of surgery or daily product routines. This minimalist
            approach delivers instant style upgrade with zero downtime, making
            it the go-to choice for celebs, athletes, and trend-setters who want
            to look their best without the hassle. SMP works with your natural
            features to create custom hairlines and density that looks authentic
            in any lighting, from studio shots to club scenes. The best part?
            You'll walk out with renewed confidence and a low-maintenance look
            that stays fresh for years, letting you focus on your hustle instead
            of your hairline.
          </Typography>
        </div>

        <div className="right">
          <div className="photo-grid">
            <img src={photo1} className="smp-photo" alt="SMP 1" />
            <img src={photo2} className="smp-photo" alt="SMP 1" />
            <img src={photo3} className="smp-photo" alt="SMP 1" />
            <img src={photo4} className="smp-photo" alt="SMP 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smp;
