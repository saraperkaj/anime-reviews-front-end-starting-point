import { axios } from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

const API = process.env.REACT_APP_API_URL;

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    axios
      .get(`${API}/anime/${id}/reviews`)
      .then((response) => setReviews(response.data))
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <section className="Reviews">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </section>
  );
}

export default Reviews;
