import { Card, Button } from 'react-bootstrap';
import './Movies.css';

function Movies(props) {
    return (
        <div className="movie-3d-wrapper">
        <Card className="movie-card">
          <Card.Img variant="top" src={props.img} className="movie-img" />
          <Card.Body className="d-flex flex-column justify-content-between">
            <div>
              <Card.Title className="movie-title">{props.title}</Card.Title>
              <Card.Text className="movie-detail">{props.detail}</Card.Text>
            </div>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <Button className="watch-btn w-100 mt-3">🎬 Watch Now</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
      
      );
}

export default Movies;
