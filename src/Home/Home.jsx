import './Home.scss'
import BackgroundVideo from '../Assets/backgroundClip_lowBitrate2.mp4'
import Navbar from './Sidebar/Sidebar';



const Home = () => {
  return (
    <div className="background-container">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src={BackgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="content">
        <Navbar />
        <img src={'../Assets/logo2.PNG'} alt="logo" className='logo' />
      </div>

    </div>


  );
}

export default Home;