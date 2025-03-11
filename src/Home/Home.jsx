import './Home.scss'
import Navbar from './Sidebar/Sidebar';



const Home = () => {
  return (
    <div className="background-container">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={'../Assets/backgroundClip_lowBitrate2.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <Navbar />
      </div>

    </div>


  );
}

export default Home;