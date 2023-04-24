import React from "react";
import "./Banner.css";
import axios from "../axios";
import { useEffect, useState } from "react";
import { API_KEY, image_url } from "../constants/constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        setMovie(res.data.results[Math.floor(Math.random() * 20)])
        setInterval(() => {               
          setMovie(res.data.results[Math.floor(Math.random() * 20)])
        }, 6000);;
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? image_url + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie?.title}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie?.overview}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
