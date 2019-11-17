import React from "react";
import "./player.scss";

function Player({ name, subtitle, image }) {
  return (
    <div className="player">
      <img src={process.env.REACT_APP_API_HOST + image} alt="speler foto" />
      <p>{name}</p>
      <span>{subtitle}</span>
    </div>
  );
}

export default Player;
