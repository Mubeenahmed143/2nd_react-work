import React from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function CardA(props) {
  const navigate = useNavigate();

  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>
            <img src={props.movieUrl} className="card-img-top img-fluid" alt={props.title} />
          </td>
          <td>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.name}</p>
          </td>
          <td>
            <a href={props.link} className="btn btn-primary mr-2" target="_blank" rel="noopener noreferrer">Watch Now</a>
          </td>
          <td>
            <button className="btn btn-info" onClick={() => navigate(`/movie/${props.id}`)}>Info</button>
          </td>
          <td>{props.deletebutton}</td>
          <td>{props.addbutton}</td>
          <td>{props.editbutton}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default CardA;
