import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            id="13246843"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="124465421"
            title="The Martian"
            price={19.99}
            image="https://cdn.knihcentrum.cz/98537051_the-martian.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="4534245"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={1}
          />
          <Product
            id="45340"
            title="The Martian"
            price={19.99}
            image="https://cdn.knihcentrum.cz/98537051_the-martian.jpg"
            rating={3}
          />
          <Product
            id="4534245"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
