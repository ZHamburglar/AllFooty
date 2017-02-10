import React, {Component} from 'react';
import TeamFixturesList from './teamfixtureslist'

export default class TeamFixtures extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4 className="teamfixturestitle">Fixtures:</h4>
        <div className="tablescroll">
          <table className="table">
            <thead>
              <tr>
                <th>Match Day</th>
                <th>Home Team:</th>
                <th>Score</th>
                <th>Away Team:</th>
                <th>Score</th>
              </tr>
            </thead>
              <TeamFixturesList teamRosterId={this.props.teamRosterId} teamName={this.props.teamName}></TeamFixturesList>
          </table>
        </div>

      </div>
    )
  }
}
