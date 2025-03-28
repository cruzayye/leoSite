import { Typography } from "@mui/material";
import Navbar from "../Sidebar/Sidebar";
import photo1 from "../../Assets/leo2-1.png";
import photo2 from "../../Assets/leo1-1.png";
import photo3 from "../../Assets/smp_white.png";
import photo4 from "../../Assets/smp_black.png";
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
            <img
              src={photo1}
              className="smp-photo"
              alt="Professional SMP treatment being performed by Portland barber specialist"
            />
            <img
              src={photo2}
              className="smp-photo"
              alt="Scalp Micropigmentation procedure in progress at Lion Mane Barber in Portland"
            />
            <img
              src={photo3}
              className="smp-photo bottom-photos"
              alt="SMP before and after results showing hairline restoration and density"
            />
            <img
              src={photo4}
              className="smp-photo bottom-photos"
              alt="Completed Scalp Micropigmentation with natural-looking hairline in Portland"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smp;
