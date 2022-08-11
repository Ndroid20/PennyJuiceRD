import React, {useState} from 'react'
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

function ImageSlider({slide}) {
    const [current, setCurrent] = useState(0);
    const length = slide.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    
    if(!Array.isArray(slide) || slide.length <= 0){
        return null;
    }

  return (
    <section className='slider'>
    <h1 className='customer__header'>Monthly Submissions!</h1>
    <FaArrowAltCircleLeft className='left__arrow' onClick={prevSlide} />
    <FaArrowAltCircleRight className='right__arrow' onClick={nextSlide}/>
        {SliderData.map((slide, index) =>{
            return (
                <div className={index === current ? 'slide active' : 'slide'} key={index} >
                    {index === current && ( <img src={slide.image} alt="drinks" className='image__slide' />) }
                </div>
                )
                
            
        })}
    
    </section>
  )
}

export default ImageSlider