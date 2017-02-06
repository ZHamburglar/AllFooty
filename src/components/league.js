import React, {Component} from 'react';

export default class League extends Component {
  render() {
    return (
      <div>
      {this.props.params.leagueId}
      This is the league etc.
        <ul>
          <li>Team 1</li>
          <li>Team 2</li>
          <li>Team 3</li>
        </ul>
      </div>
    )
  }
}
