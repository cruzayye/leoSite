import './Home.scss'
import BackgroundVideo from '../Assets/backgroundClip_lowBitrate2.mp4'
import logo from '../Assets/logo.jpg'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
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

        {/* <h1>LION MANE</h1> */}
      </div>

    </div>


  );
}

export default Home;