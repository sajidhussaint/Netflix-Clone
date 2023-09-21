import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios"; //custom function axios
import { API_KEY, IMAGE_URL } from "../../constants/Constants";
import randomNumber from "random-number";

const Banner = () => {
  const [movie, setMovie] = useState();

  const options = {
    min: 0,
    max: 19,
    integer: true,
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
      )
      .then((response) => {
        const options = {
          min: 0,
          max: response.data.results.length - 1,
          integer: true,
        };
        
        setMovie(response.data.results[randomNumber(options)]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${movie ? IMAGE_URL + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <a href={`https://www.youtube.com/results?search_query=${movie ?movie.title: ""}`}><button   className="button">Play</button></a>
          <a href="https://www.youtube.com/@Netflix"><button className="button">My list</button></a>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
