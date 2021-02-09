import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/Carousel-item";
import Footer from "../components/Footer";

import "../assets/styles/App.scss";

const App = () => {
  const [videos, setVideos] = useState([]);
  // useState({ mylist: [], trends: [], originals: [] });
  // we can use either Optional Chaining, like "videos.trends? || videos.mylist? or we can initialize props"
  useEffect(() => {
    fetch("http://localhost:3000/initalState")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search />
      {videos.mylist?.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {videos.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
