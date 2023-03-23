import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUrl, apiKey } from 'api/fetchKey';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // const fetchUrl = 'https://api.themoviedb.org/3/';
    // const apiKey = '93dad7f5c3f08e509beef896c33679a7';

    const fetchReviews = async () => {
      const res = await fetch(
        `${fetchUrl}/movie/${movieId}/reviews?api_key=${apiKey}`
      );
      const resBody = await res.json();

      setReviews(resBody.results);
    };

    fetchReviews().catch(console.error);
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h6>Author:{review.author}</h6>
            <p>{review.content}</p>
          </li>
        ))}
        {reviews.length === 0 && (
          <p>We don't have any reviews for this movie.</p>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
