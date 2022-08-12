
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios'; // Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Juice = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    return await axios
      .get("http://localhost:3001/juicedb")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
  //console.log(“data”, data)
  return (
    <>
      <div class="container">
      <h1>Shop Our Different Flavors</h1>
        <Row xs={1} md={2} className="g-4">
          {data.map((item, index) => (
            <Col>
              <Card>
                <Card.Title>
                    <h2>{item.flavor}</h2>
                </Card.Title>
                <Card.Img
                  variant="top"
                  className="juice-image"
                  src={item.image}
                />
                <Card.Body>
                  <Card.Text>
                    <h2 className="price">${item.price}/gallon</h2>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Juice;
