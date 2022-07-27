import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieInfo = () => {
  const params = useParams();

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=467f311933c076d5b270a36f31a94583&language=en-US`
      )
      .then((res) => setMovieData(res.data));
  }, [params]);

  const revenuMovie = () => {
    if (movieData.revenue === undefined) {
      return "loading";
    } else if (movieData.revenue === 0) {
      return "There is no data for the revenue of the film";
    } else {
      return movieData.revenue;
    }
  };

  const dateFormater = (date) => {
    if (date === undefined) {
      return "loading";
    } else {
      let [yy, mm, dd] = date.split("-");
      return [dd, mm, yy].join("/");
    }
  };

  const displayGenre = () => {
    if (movieData.genres === undefined) {
      return "loading";
    } else {
      let arrayGenre = movieData.genres;
      return arrayGenre.map((genre) => <li key={genre.id}>{genre.name}</li>);
    }
  };

  return (
    <div>
      <section
        className="movieHeader"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}')`,
        }}
      >
        <img
          src={
            movieData.poster_path
              ? "https://image.tmdb.org/t/p/w500/" + movieData.poster_path
              : "./img/noImg.png"
          }
          alt="poster film"
        />
        <div className="movieDescription">
          <h2>{movieData.title}</h2>
          <p>{movieData.overview}</p>
          <p>{dateFormater(movieData.release_date)}</p>
          <p>{revenuMovie()}</p>
          <ul>{displayGenre()}</ul>
        </div>
      </section>
    </div>
  );
};

export default MovieInfo;
