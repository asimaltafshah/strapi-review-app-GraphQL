import React from "react";
import useFetch from "../Hooks/useFetch";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/reviews");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          <small>console list</small>
          <p>{review.body.substring(0, 50)}...</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
