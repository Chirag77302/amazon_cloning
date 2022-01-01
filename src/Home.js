import React from "react";
import "./Home.css";
import NestedGrid from "./Grid";
import Carousel from 'react-material-ui-carousel';

function Home() {

  const items = [
      {
          image:'https://m.media-amazon.com/images/I/61JaDmxkZBL._SX3000_.jpg'
      },
      {
          image:'https://m.media-amazon.com/images/I/61F6uw-JblL._SX3000_.jpg'
      },
      {
          image:'https://m.media-amazon.com/images/I/61FuWeCuGCL._SX3000_.jpg'
      },
      {
          image:'https://m.media-amazon.com/images/I/61D9w39orUL._SX3000_.jpg'
      },
      {
          image:'https://m.media-amazon.com/images/I/71MwDPWV9XL._SX3000_.jpg'
      },
      {
          image:'https://m.media-amazon.com/images/I/51A9BdEGMhL._SX3000_.jpg'
      }
  ];

  return (
    <div className="home">
      <div className="home__container">

        <Carousel>
            {items.map((item, i) => (
                <img
                key = {i}
                className="home__image"
                src={item.image}
                alt=""/>
               ))} 
        </Carousel> 

        <NestedGrid />
        
      </div>
    </div>
    );
};

export default Home;