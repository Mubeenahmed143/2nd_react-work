import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {object,string} from "yup";

function Editmovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
 

 useEffect(() => {
    fetch(`https://686e1a71c9090c49538847f9.mockapi.io/the_movies/${id}`)
      .then(response => response.json())
      .then(movieData => setMovie(movieData));
      
  }, []);

 
  return movie ? <EditmovieForm movie={movie} id={id}  /> : <p>Loading</p>;
}

export default Editmovie;

function EditmovieForm({ movie, id}) {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      title: movie.title,
    },
    onSubmit: (updatedMovie) => {
      updateUser(updatedMovie);
    },
    validationSchema: userValidationSchema,
  });


  const navigate = useNavigate();
  const updateUser = (updatedUser) => {
    fetch(`https://686e1a71c9090c49538847f9.mockapi.io/the_movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      if (response.ok) {
        console.log("Update successful");
        navigate("/movie_fetchA");
      } else {
        console.error("Update failed:", response.statusText);
      }
    })
    .catch(error => {
      console.error("Update failed:", error);
    });
  };





  return (
    <form onSubmit={handleSubmit}>
      <input
        value={values.title}
        onChange={handleChange}
        name="title"
        type="text"
        placeholder="Title"
        required
      />
      <button type="submit">Save</button>
    </form>
  );
}

const userValidationSchema=object({

    title:string().required(),

    
    });