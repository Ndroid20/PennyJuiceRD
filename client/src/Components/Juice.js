// import React from 'react';
// import { useState, useEffect } from 'react';
// import Axios from 'axios'; // Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React


export const Juice = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    //When the page loads it fetches the data
    Axios.get("/juicedb").then((result) => {
      setProductList(result.data);
    });
  }, []);

  return (
    <div>
      <section className="text">
        <h2>Shop Our Different Flavors</h2>
      </section>
      <section className="juices">
        {productList.map((value) => {
          return (
            <div className="juice">
              <div className="juice-image">
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

