import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";// Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React

export const Products = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    //When the page loads it fetches the data
    Axios.get("localhost:3000/productsdb").then((result) => {
      setProductList(result.data);
    });
  }, []);
  const productListLowToHigh = () => {
    Axios.get("localhost:3000/productsdb1").then((response) => {
      setProductList(response.data);
    });
  };
  const productListHighToLow = () => {
    Axios.get("localhost:3000/productsdb2").then((result) => {
      setProductList(result.data);
    });
  };

  const onChange = (param) => {
    if (param.target.value === "loweringPrice") {
      productListLowToHigh();
    }
    if (param.target.value === "raisingPrice") {
      productListHighToLow();
    }
  };
  return (
    <div>
      <section class="text">
        <h2>Shop Our Different Flavors</h2>
      </section>
      <section className="filter">
        <div className="filtering">
          <label>Filter By:</label>
          <select onChange={onChange}>
            <option value="select">Select</option>
            <option value="loweringPrice">Price: Low-High</option>
            <option value="raisingPrice">Price: High-Low</option>
          </select>
        </div>
      </section>
      <section className="products">
        {productList.map((value) => {
          return (
            <div className="product">
              <div className="product-image">
                <img src={value.image} />
              </div>
              <p> {value.title}</p>
              <p> {value.description}</p>
              <p> ${value.price} per gallon</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
