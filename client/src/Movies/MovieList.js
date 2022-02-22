import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function MovieList(props) {
  const { url, path } = useRouteMatch();

  return (
    <div className="movie-list">
      {/* {console.log(url, path)} */}
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;
  const { url, path } = useRouteMatch();

  return (
    <Link to={`/movies/${props.movie.id}`}>
      {/* {console.log(url, path)} */}
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
