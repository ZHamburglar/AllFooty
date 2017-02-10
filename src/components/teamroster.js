import React, {Component} from 'react';
import TeamRosterList from './teamrosterlist'

export default class TeamRoster extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4 className="teamrostertitle">Team Roster:</h4>
        <div className="tablescroll">
          <table className="table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Position</th>
              </tr>
            </thead>
              <TeamRosterList teamRosterId={this.props.teamRosterId}></TeamRosterList>
          </table>
        </div>
      </div>
    )
  }
}
