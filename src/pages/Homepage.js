import React from "react";
// import useFetch from "../Hooks/useFetch";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const REVIEWS = gql`
  query GetReviews {
    reviews {
      title
      body
      rating
      id
      categories {
        name
        id
      }
    }
  }
`;
const Homepage = () => {
  // const { loading, error, data } = useFetch("http://localhost:1337/reviews");
  const { loading, error, data } = useQuery(REVIEWS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      {data.reviews.map((review) => (
        <div key={review.id} className="review-card">
          <div className="rating">{review.rating}</div>
          <h2>{review.title}</h2>
          {review.categories.map((category) => (
            <small key={category.id}>{category.name}</small>
          ))}
          <p>{review.body.substring(0, 50)}...</p>
          <Link to={`/details/${review.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
