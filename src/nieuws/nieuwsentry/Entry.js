import React from 'react';
import { Link } from 'react-router-dom';

function Entry({id, title, date, body}) {
  return <div className="news-item">
    <span className="date">{date}</span>
    <Link to={`/nieuws/${id}`} className="title">{title}</Link>
    <p className="body" dangerouslySetInnerHTML={{__html: body.split('>')[1].substring(0,255)+"..."}} />
    <Link to={`/nieuws/${id}`}>Lees meer</Link>
  </div>;
}

export default Entry;
