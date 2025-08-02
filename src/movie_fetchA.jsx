import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardA from './netflixA';
import { useNavigate } from "react-router-dom";

function MovieListA() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  const getdata = () => {
    fetch("https://686e1a71c9090c49538847f9.mockapi.io/the_movies")
      .then((data) => data.json())
      .then((movieList) => setMovie(movieList));
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteMovie = (id) => {
    fetch(`https://686e1a71c9090c49538847f9.mockapi.io/the_movies/${id}`, {
      method: "DELETE",
    }).then(() => getdata());
  };

  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <div className="container">
        <div className="row">
          {movie.map((mov) => (
            <div className="col-md-8" key={mov.id}>
              <CardA
                movieUrl={mov.movieUrl}
                title={mov.title}
                name={mov.name}
                link={mov.link}
                id={mov.id}
                deletebutton={
                  <button
                    onClick={() => deleteMovie(mov.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                }
                editbutton={
                  <button
                    onClick={() => navigate(`/movie/edit/${mov.id}`)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                }
              />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => navigate("/add_movies")} className="btn btn-info mt-3">
        Add Movie
      </button>
    </div>
  );
}

export default MovieListA;
