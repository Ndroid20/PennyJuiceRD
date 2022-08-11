import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  const imgAbout =
    'https://pm1.narvii.com/6492/2f28365bdd30872f7f794cbd7847d9821089827d_hq.jpg';
  return (
    <div className="about">
      <img id="aboutimg" src={imgAbout} />
      <section>
        <h1>About Us</h1>
        <p>
          {' '}
          Here at PennyJuice, we strive to provide the best quality juice and
          best prices! Not only do we beat competitors, we also give back to the
          community by serving the best juicers in town!
        </p>
        <button type="button" className="btn btn-warning">
          Contact Us!
          {/* <Link className="contactbtn" to="/contact">
            Contact Us
          </Link> */}
        </button>
      </section>
    </div>
  );
};

export default About;
