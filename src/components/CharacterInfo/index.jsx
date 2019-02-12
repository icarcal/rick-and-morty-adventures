import React, {Component} from 'react';

class CharacterInfo extends Component {
  render() {
    const { character } = this.props;

    return (
      <div className="character">
        <h1>You've selected {character.name}</h1>

        <div className="box">
          <div className="image">
            <img src={character.image} alt={character.name}/>
          </div>
          <div className="info">
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterInfo;
