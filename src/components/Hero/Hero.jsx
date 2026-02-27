import './Hero.css';

// eslint-disable-next-line react/prop-types
const Hero = ({ Page }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 text-center">
            <h5>
              <a href="#">Home</a> / {Page}
            </h5>
            <h3>{Page}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;