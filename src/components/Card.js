import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <Link
        to={{
          pathname: `/${movie.id}`,
          state: { movie },
        }}
      >
        <img
          src={
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
              : "./img/noImg.png"
          }
          alt="poster film"
        />
      </Link>
      <h2 className="title">{movie.title}</h2>
    </div>
  );
};

export default Card;
