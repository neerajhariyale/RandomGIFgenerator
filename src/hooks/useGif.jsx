import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = "Aj9dBEecYpYkZQOVLbs07cs2qBQyrO3V";

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    // const randomUrl =`https://api.giphy.com/v1/gifs/randoM?api_key=${API_KEY}`;

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loading, fetchData };
};
//default
export default useGif;
