import React from 'react';
import { Link } from 'react-router-dom';
import './nieuws.scss';

function Nieuws({title, date}) {
  return <div class="news-detail">
    <span className="date">{date}</span>
    <span className="title">{title}</span>
    <Link to="/">Lees meer</Link>
  </div>;
}

export default Nieuws;
