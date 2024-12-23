import './Home.scss'
import BackgroundVideo from '../Assets/backgroundClip_lowBitrate.mp4'

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
        <h1>LION MANE</h1>
        <a href="" target="_blank" rel="noopener noreferrer">
          <h2>book now</h2>
        </a>
      </div>

    </div>


  );
}

export default Home;