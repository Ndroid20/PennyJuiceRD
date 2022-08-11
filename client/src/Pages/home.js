import React from 'react';
import './home.css';
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import images from "../assets/homeimages";




function Home() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className='homebox'>
      <div className='upper-portion'>
        <div className='insider__portion'>
          <h1>WELCOME TO <span className='red'>PENNY JUICE</span></h1>
          <p>Things are always better when you kick off your day with Penny Juice. It just makes <span className='copper'>cents</span></p>
          <button className='upper__button'>Get Started!</button>
        </div>
      </div>
    <div className='lower__section'>
    <div className='insider__lower--portion'>
    <h1 className='lower__header'>We now offer a variety of new flavors!</h1>
    <p>
      From Lemonade to Blueberry. We have all flavors for the family to enjoy!
    </p>
    </div>
   
    <motion.div ref={carousel} className='carousel' whileTap={{cursor : "grabbing"}}>
    
      <motion.div drag="x" 
        dragConstraints={{right: 0, left: -width}} 
        className='inner-carousel'>
        {images.map(image =>{
          return(
              <motion.div className='item' key={image}>
              <img src={image} alt="" />
              </motion.div>
          );
          })}
      </motion.div>
    </motion.div>
    <button className='carousel__button'>Check it out !</button>
   

    </div>
    
    </section>
  )
}



export default Home