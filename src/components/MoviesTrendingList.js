import { Link, useLocation } from 'react-router-dom';

export const MoviesTrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            key={movie.id}
            to={`movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
