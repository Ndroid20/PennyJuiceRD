import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios'; // Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React
import axios from 'axios';
import Juicecard from './Juicecard';
import './juice.css';


export const Juice = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    //When the page loads it fetches the data
    // axios.get("/juicedb").then((result) => {
    //   setProductList(result.data);
    // });
    getJuice();
  }, []);

  async function getJuice(){
    try {
      let juices = await axios.get('http://localhost:3001/juicedb');
      console.log(juices)
      setProductList(juices.data);

    } catch (error) {
      console.log(error);      
    }
  }

  return (
    <div className='juices-wrapper'>
      <section className="text">
        <h1>Shop Our Different Flavors</h1>
      </section>



      <section className="juices">
        {productList.map((value) => {
          return (
            <Juicecard value={value} />
          )
        })}
      </section>


    </div>
  );
};

