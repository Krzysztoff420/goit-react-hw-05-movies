import { useState, useEffect } from 'react';
import { MoviesTrendingList } from '../MoviesTrendingList/MoviesTrendingList';
import { fetchUrl, apiKey } from '../api/fetchKey';

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
