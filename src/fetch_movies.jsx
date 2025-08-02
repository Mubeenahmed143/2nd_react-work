// MovieList.js
import React, { useEffect, useState } from 'react';
import Card from './netflix';
 // make sure path sahi ho
import './App.css'; // optional: styling ke liye

function MovieList() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("https://686e1a71c9090c49538847f9.mockapi.io/the_movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((movieList) => {
        setMovie(movieList);
        console.log("Movies fetched:", movieList);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {movie.map((mov,index) => (
          <div className="col-md-4" key={index}>
            <Card
              movieUrl={mov.movieUrl}
              title={mov.title}
              name={mov.name}
              link={mov.link}
              id={mov.id}
              key={mov.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
