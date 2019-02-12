import React, {Component} from 'react';
import './adventure.css';

import CharacterList from '../CharacterList';

class Adventure extends Component {
  render() {
    const { dimension } = this.props;

    return (
      <div className="adventure">
        <h1>Let's start our adventure!</h1>
        <h2>It's a Rick and morty adventure on dimension {dimension}!</h2>

        <CharacterList />
      </div>
    )
  }
}

export default Adventure;
