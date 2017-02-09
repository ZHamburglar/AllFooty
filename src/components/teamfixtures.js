import React, {Component} from 'react';
import TeamFixturesList from './teamfixtureslist'

export default class TeamFixtures extends Component {
  constructor() {
    super();
    this.state = {};
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
        <h4>Fixtures:</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Match Day</th>
              <th>Home Team</th>
              <th>Home Score</th>
              <th>Away Team</th>
              <th>Away Score</th>


            </tr>
          </thead>
            <TeamFixturesList teamRosterId={this.props.teamRosterId}></TeamFixturesList>
        </table>
      </div>
    )
  }
}
