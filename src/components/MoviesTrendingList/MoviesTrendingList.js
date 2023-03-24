import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MoviesTrendingList.propTypes = {
  movies: PropTypes.array.isRequired,
};