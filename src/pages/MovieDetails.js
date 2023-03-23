import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { MovieCard, MovieInfo, AdditionalInfo} from '../components/MovieDetails.styled';
import { BackLink } from '../components/BackLink';
import { fetchUrl, apiKey } from '../api/fetchKey';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movieFetched, setMovieFetched] = useState({});
  const [genres, setGenres] = useState('');

  useEffect(() => {
    const fetchMovieById = async () => {
      const data = await fetch(`${fetchUrl}movie/${movieId}?api_key=${apiKey}`);
      const movieFromApi = await data.json();

      setMovieFetched(movieFromApi);
      const movieGenres = movieFromApi.genres
        .map(genre => genre.name)
        .join(' ');
      setGenres(movieGenres);
    };
    fetchMovieById().catch(console.error);
  }, [movieId]);

  const score = Math.ceil(movieFetched.vote_average * 10);

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieCard>
        <img
          src={`https://image.tmdb.org/t/p/w342/${movieFetched.poster_path}`}
          alt={`${movieFetched.original_title} movie poster`}
        />
        <MovieInfo>
          <h2>{movieFetched.original_title}</h2>
          <p>User score: {score}%</p>
          <h4>Overview</h4>
          <p>{movieFetched.overview}</p>
          <h5>Genres</h5>
          <p>{genres}</p>
        </MovieInfo>
      </MovieCard>
      <AdditionalInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
