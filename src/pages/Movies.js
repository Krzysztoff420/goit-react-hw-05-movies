import { MoviesList } from 'components/MoviesList';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get('query') ?? '';

  const fetchUrl = 'https://api.themoviedb.org/3/search/movie';
  const apiKey = '93dad7f5c3f08e509beef896c33679a7';

  const handleFetchMovies = async () => {
    const data = await fetch(`${fetchUrl}?api_key=${apiKey}&${searchParams}`);
    const moviesFromApi = await data.json();
    setMovies(moviesFromApi.results);
  };

  const updateQueryString = evt => {
    const query = evt.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <input type="text" value={title} onChange={updateQueryString}></input>
      <button onClick={handleFetchMovies}>Search</button>
      <MoviesList movies={movies} />
    </main>
  );
};

export default Movies;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
