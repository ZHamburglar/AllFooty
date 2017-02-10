import React, {Component} from 'react';
import LeagueTableTeams from './leaguetableteams'

export default class LeagueTable extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h4 className="leaguetabletitle">League Table</h4>
        <div className="tablescroll">
          <table className="table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
              </tr>
            </thead>
            <LeagueTableTeams leagueId={this.props.leagueId}></LeagueTableTeams>
          </table>
        </div>
      </div>
    )
  }
}
