import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [moviesDataPopular, setMoviesDataPopular] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=467f311933c076d5b270a36f31a94583&language=fr-FR`
      )
      .then((res) => setMoviesDataPopular(res.data.results));
  }, []);

  useEffect(() => {
    if (search !== "") {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=467f311933c076d5b270a36f31a94583&query=${search}&language=fr-FR`
        )
        .then((res) => setMoviesData(res.data.results));
    }
  }, [search]);

  const displayData = () => {
    if (search === "") {
      return moviesDataPopular
        .slice(0, 24)
        .map((movie) => <Card key={movie.id} movie={movie} />);
    } else {
      return moviesData
        .slice(0, 24)
        .map((movie) => <Card key={movie.id} movie={movie} />);
    }
  };

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
          <input type="submit" value="Rechercher" />
        </form>
      </div>
      <div className="result">{displayData()}</div>
    </div>
  );
};

export default Form;
