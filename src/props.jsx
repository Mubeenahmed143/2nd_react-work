
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

const cardData = [
    {
      imgsrc: "https://images.hindustantimes.com/img/2023/01/25/550x309/pathaan_movie_review_1674631292696_1674631292838_1674631292838.jpeg",
      title: "Pathan",
      name: "An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country.",
      link: "https://www.imdb.com/video/vi4125082905/?playlistId=tt12844910&ref_=tt_pr_ov_vi"
    },
    {
      imgsrc: "https://static.toiimg.com/thumb/msid-104912751,width-400,resizemode-4/104912751.jpg",
      title: "Dunki",
      name: "When his friends in Punjab struggle to clear the immigration process, an ex-soldier guides them on a risky journey to enter the UK without permission.",
      link: "https://www.imdb.com/video/vi4125082905/?playlistId=tt12844910&ref_=tt_pr_ov_vi"
    },
    {
      imgsrc: "https://assets.gadgets360cdn.com/pricee/assets/product/202206/MV5BNTFjMGVlZDQtN2M2ZS00N2UxLTgyYjItN2YzYWIyOTQyNjFiXkEyXkFqcGdeQXVyOTI3MzI4MzA._V1__1655912225.jpg?downsize=680:*",
      title: "Jawan",
      name: "A prison warden recruits inmates to commit outrageous crimes that shed light on corruption and injustice - and that lead him to an unexpected reunion.",
      link: "https://www.imdb.com/video/vi4125082905/?playlistId=tt12844910&ref_=tt_pr_ov_vi"
    }
  ];
function MovieList(){
  return (

    <div>
      <div className="container">
        <div className="row">
          {cardData.map((card, index) => (
            <div className="col-md-4" key={index}>
                <Movie {...card} index={index} />
             
            </div>
          ))}
        </div>
      </div>
    </div>
    

  );
          }

function Movie(props) {

    const navigate=useNavigate();

   const trynavigate=useNavigate();
   const apnanavigate=useNavigate();

   const handleMovieClick = () => {
    navigate(`/props_detail/${props.index}`);
  };

    return (<>
        <div className="card" onClick={handleMovieClick}>
         <img src={props.imgsrc} className="card-img-top img-fluid" alt={props.title} />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.name}</p>
            <a href={props.link} className="btn btn-primary" target="_blank">Watch Now</a>
          </div>
        </div>


<button onClick={()=>trynavigate("/fb_post")} >Try Click</button>




<button onClick={()=>apnanavigate("/product")} >Try Click</button>
</>
      );
    };
    
export default MovieList;