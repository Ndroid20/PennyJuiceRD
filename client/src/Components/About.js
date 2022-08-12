import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  const imgAbout =
    'https://images.pexels.com/photos/5119598/pexels-photo-5119598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  return (
    <div className="about">
      <img id="aboutimg" src={imgAbout} />
      <section>
        <h1>About Us</h1>
        <p>
          {' '}
          Here at PennyJuice, we strive to provide the best quality juice and
          best prices! Not only do we beat competitors, we also give back to the
          community by serving the best juices in town!
        </p>
          <button type="button" className="btn btn-warning">
<Link to='/Contact'>Contact Us!</Link>
        </button>
      </section>
    </div>
  );
};

export default About;
