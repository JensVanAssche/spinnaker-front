import React from 'react';
import { Link } from 'react-router-dom';

function Nieuws({id, title, date}) {
  return <div className="news-item">
    <span className="date">{date}</span>
    <Link to={`/nieuws/article/${id}`} className="title">{title}</Link>
    <Link to={`/nieuws/article/${id}`}>Lees meer</Link>
  </div>;
}

export default Nieuws;
