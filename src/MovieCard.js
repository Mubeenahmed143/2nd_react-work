// MovieCard.js
import React from 'react';

function MovieCard({ img, title, detail, link }) {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{detail}</p>
        <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Watch
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
