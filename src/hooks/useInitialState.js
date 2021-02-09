import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  // useState({ mylist: [], trends: [], originals: [] });
  // we can use either Optional Chaining, like "videos.trends? || videos.mylist? or we can initialize props"
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;
};

export default useInitialState;
