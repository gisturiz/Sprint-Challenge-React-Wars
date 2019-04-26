import React from 'react';
import './StarWars.css';

function StarWars(props) {
    return (
        <div className="character-info">
        <h3>{props.character.name}</h3>
        <p>
          <strong>Gender:</strong> {props.character.gender}
        </p>
        <p>
          <strong>Height:</strong> {props.character.height}
        </p>
        <p>
          <strong>Hair Color:</strong> {props.character.hair_color}
        </p>
        <p>
          <strong>Eye Color:</strong> {props.character.eye_color}
        </p>
        <p>
          <strong>Skin Color:</strong> {props.character.skin_color}
        </p>
      </div>
    )
}

export default StarWars;