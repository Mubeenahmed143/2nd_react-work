// MovieList.js
import React, { useEffect, useState } from 'react';
import Card from './netflix';
 // make sure path sahi ho
import './App.css'; // optional: styling ke liye
import { useParams } from 'react-router-dom';

function MovieDetail() {
    
    const {id} = useParams();
    console.log(id);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://686e1a71c9090c49538847f9.mockapi.io/the_movies/${id}`)
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
       
          <div className="col-md-4" >
            <Card
              movieUrl={movie.movieUrl}
              title={movie.title}
              name={movie.name}
              link={movie.link}
            />
          </div>
        
      </div>
    </div>
  );
}

export default MovieDetail;
