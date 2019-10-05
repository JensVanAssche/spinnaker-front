import React from 'react';
import './player.scss';

function Player({ name, image }) {
  return (
    <div className="player">
      <img src={process.env.REACT_APP_API_HOST + image} alt='player' />
      <p>{name}</p>
    </div>
  );
}

export default Player;
