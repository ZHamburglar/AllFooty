import React, {Component} from 'react';
import TeamRosterList from './teamrosterlist'

export default class TeamRoster extends Component {
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
