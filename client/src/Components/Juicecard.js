import React from 'react';
import './juicecard.css';

function Juicecard(props) {
  return (
    <div className="juice" key={props.value.id}>
        <div className="juice-image">
            <img src={props.value.image} className="j-card" />
        </div>
        <p> {props.value.flavor}</p>
        <p> ${props.value.price} per gallon</p>
    </div>
  )
}

export default Juicecard;