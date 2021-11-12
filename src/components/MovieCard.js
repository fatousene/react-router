import React from 'react';
import PropTypes from 'prop-types';
import Rate from './Rate';
import '../App.css';
import {Link } from "react-router-dom";
import Trailer from './trailer/Trailer';
const MovieCard = ({ movie: { title, posterUrl, description, rate, annonce, id } }) => {
 
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <div id="div">
       <h1>{title}</h1>
        <p>{description}</p>
        <img src={posterUrl} alt=""/>
       <h1 id="h1"> <Rate rating={rate} /></h1>
       <br/>
       <a href="">{annonce}</a>
      </div>
       </Link>
   </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;