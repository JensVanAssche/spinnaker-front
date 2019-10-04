import React from 'react';
import { Link } from 'react-router-dom';
import './sport.scss';

function Sport({name}) {
  return <Link className="sport-thumbnail" to={"/" + name.split(' ').reverse()[0]} >
    <img src={process.env.REACT_APP_API_HOST + name.split(' ').reverse()[0] + ".jpg"} alt="Logo" />
    <span>{name}</span>
  </Link>;
}

export default Sport;
