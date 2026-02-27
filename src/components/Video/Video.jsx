import './Video.css';
import { FaPlay } from "react-icons/fa";

const Video = () => {
  return (
    <section className="video-section">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-7">
            <h6>| Video View</h6>
            <h2>Get Closer View & Different Feeling</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="video">
              <a href="#">
                <FaPlay />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;