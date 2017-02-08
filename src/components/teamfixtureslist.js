import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class TeamFixturesList extends Component {
  constructor() {
    super();
    this.state = {
      teamFixtures: []
    };
  }

  getLeague() {
    let leagueTableId = this.props.teamRosterId;
    var url="http://api.football-data.org/v1/teams/"+leagueTableId+"/fixtures";
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      console.log('TeamFixtures: ', response.body);
      this.setState({
        teamFixtures: response.body.fixtures
      })
    });
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    console.log('i mounted');
    this.getLeague()

  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
    console.log('i will receive props');
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
    console.log('i will update');
  }

  componentWillUnmount() {
    // Called when the component is removed
    console.log('i will unmount');
  }

  updateSearch() {}

  render() {
    var teamTableListOut = _.map(this.state.teamFixtures, (teams, i) => {

      return       <tr key={i}>
                    <td>{teams.matchday}</td>
                    <td>{teams.homeTeamName}</td>
                    <td>{teams.result.goalsHomeTeam}</td>
                    <td>{teams.awayTeamName}</td>
                    <td>{teams.result.goalsAwayTeam}</td>
                  </tr>
    })
    return (
      <tbody>
        {teamTableListOut}
      </tbody>
    )
  }
}
