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
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
