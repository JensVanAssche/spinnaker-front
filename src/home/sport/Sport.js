import React from 'react';
import { Link } from 'react-router-dom';
import sport from 'assets/images/sport.png';
import './sport.scss';

function Sport({name}) {
  return <Link className="sport-thumbnail" to={"/" + name} >
    <img src={sport} alt="Logo" />
    <span>{name}</span>
  </Link>;
}

export default Sport;
