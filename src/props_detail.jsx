import React from 'react'
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
function Moviedetail() {

    const { id }=useParams();
    console.log(id);
   const movie=cardData[parseInt(id)];
 
   if (!movie) {
    return <div>No movie found</div>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-md-4">
    <div className="card">
    <img src={movie.imgsrc} className="card-img-top img-fluid" alt={movie.title} />
     <div className="card-body">
       <h5 className="card-title">{movie.title}</h5>
       <p className="card-text">{movie.name}</p>
       <a href={movie.link} className="btn btn-primary" target="_blank">Watch Now</a>
     </div>
     </div>
   </div>
</div>
</div>
</>

  );
}

export default Moviedetail;