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

  componentDidMount() {
    // Called after the component has been rendered into the page
    this.getLeague()
  }


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
