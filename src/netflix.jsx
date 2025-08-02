import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate  } from "react-router-dom";



function Card(props){
    const navigate = useNavigate();
    const navigate2 = useNavigate();


    return(
        <div className="card" style={{ width: '18rem' }} onClick={()=>navigate(`/fetch_movies/${props.id}`)} >
      <img
        src={props.movieUrl}
        className="card-img-top"
        alt="Card"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.name}
        </p>
        <a href={props.link} className="btn btn-primary">Watch Now</a>
        <button onClick={()=>navigate2(`/fetch_movies/${props.id}`)}>Detail</button>
      </div>
    </div>
    )

}

export default Card;
