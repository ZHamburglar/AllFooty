import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class TeamRosterList extends Component {
  constructor() {
    super();
    this.state = {
      teamRoster: []
    };
  }

  getLeague() {
    let leagueTableId = this.props.teamRosterId;
    var url="http://api.football-data.org/v1/teams/"+leagueTableId+"/players";
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      this.setState({
        teamRoster: response.body.players
      })
    });
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    this.getLeague()

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
    var teamTableListOut = _.map(this.state.teamRoster, (teams, i) => {

      return       <tr key={i}>
                    <td>{teams.jerseyNumber}</td>
                    <td>{teams.name}</td>
                    <td>{teams.position}</td>
                  </tr>
    })
    return (
      <tbody>
        {teamTableListOut}
      </tbody>
    )
  }
}
