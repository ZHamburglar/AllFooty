import React, {Component} from 'react';
import LeagueTableTeams from './leaguetableteams'

export default class LeagueTable extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }

  updateSearch() {}

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
