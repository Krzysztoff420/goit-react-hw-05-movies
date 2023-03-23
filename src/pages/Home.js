import { useState, useEffect } from 'react';
import { MoviesTrendingList } from '../components/MoviesTrendingList';
import { fetchUrl, apiKey } from '../api/fetchKey';
import PropTypes from 'prop-types';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const trending = 'trending/movie/day';

    const fetchTrending = async () => {
      const res = await fetch(`${fetchUrl}${trending}?api_key=${apiKey}`);
      const resBody = await res.json();

      setTrendingMovies(resBody.results);
    };

    fetchTrending().catch(console.error);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {trendingMovies && <MoviesTrendingList movies={trendingMovies} />}
    </main>
  );
};

export default Home;

MoviesTrendingList.propTypes = {
  movies: PropTypes.array.isRequired,
};
