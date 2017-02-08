import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class LeagueTableTeams extends Component {
  constructor() {
    super();
    this.state = {
      teamTable: []
    };
  }

  getLeague() {
    let leagueTableId = this.props.leagueId;
    var url="http://api.football-data.org/v1/competitions/"+leagueTableId+"/leagueTable";
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      console.log('League Table: ', response.body.standing);
      this.setState({
        teamTable: response.body.standing
      })
    });
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    console.log('i mounted');


  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
    console.log('i will receive props');
    console.log({nextProps})
    this.getLeague()
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
    var teamTableListOut = _.map(this.state.teamTable, (teams, i) => {

      return       <tr key={i}>
                    <td>{teams.position}</td>
                    <td>{teams.teamName}</td>
                    <td>{teams.points}</td>
                    <td>{teams.wins}</td>
                    <td>{teams.draws}</td>
                    <td>{teams.losses}</td>
                  </tr>
    })
    return (
      <tbody>
        {teamTableListOut}
      </tbody>
    )
  }
}
