import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/Carousel-item";

import "../assets/styles/App.scss";

const App = () => (
  <div className="App">
    <Header />
    <Search />
    <Categories>
      <Carousel>
        <CarouselItem />
      </Carousel>
    </Categories>
  </div>
);

export default App;
