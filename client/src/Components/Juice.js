import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Juice.css";

const Juice = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    return await Axios.get("http://localhost:3001/juicedb")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  //console.log(“data”, data)
  return (
    <>
      <h1 className='juice_title'>Shop Our Different Flavors</h1>
      <section className="juice_container">
        <div className="juice_wrapper">
          {data.map((item, index) => (
            <div className='juice_card'>
              <h2>{item.flavor}</h2>

              <img variant="top" className="juice-image" src={item.image} />

              <p className="price">${item.price}/gallon</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Juice;
