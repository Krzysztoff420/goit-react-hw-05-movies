import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUrl, apiKey } from 'components/api/fetchKey';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
       const fetchCast = async () => {
      const res = await fetch(`${fetchUrl}/movie/${movieId}/credits?api_key=${apiKey}`);
      const resBody = await res.json();

      setCast(resBody.cast);
    };
    fetchCast().catch(console.error);
  }, [movieId]);

  return (
    <section>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w45/${actor.profile_path}`}
              alt={`${actor.name}`}
            ></img>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Cast;
