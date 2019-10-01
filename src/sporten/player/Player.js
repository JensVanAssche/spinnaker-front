import React from 'react';
import Photo from 'assets/images/sport.png';
import './player.scss';

function Player({ name, photo }) {
  return (
    <div className="player">
      <img src={Photo} alt='player' />
      <p>{name}</p>
    </div>
  );
}

export default Player;
