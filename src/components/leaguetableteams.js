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
      console.log('this param', this.props.leagueId);
      if (teams.position >= 16 && this.props.leagueId == 430) {
        var tablecolor
        var tablecolor = "relegation"
      } else if (teams.position >= 18 && this.props.leagueId == 436) {
        var tablecolor
        var tablecolor = "relegation"
      } else if (teams.position >= 18 && this.props.leagueId == 426) {
        var tablecolor
        var tablecolor = "relegation"
      }else if (teams.position >= 18 && this.props.leagueId == 438) {
        var tablecolor
        var tablecolor = "relegation"
      }else if (teams.position >= 18 && this.props.leagueId == 434) {
        var tablecolor
        var tablecolor = "relegation"
      }else if (teams.position <=3) {
        var tablecolor
        var tablecolor = "europe"
      } else if (teams.position === 4) {
        var tablecolor
        var tablecolor = "europeplayoff"
      }
      return       <tr key={i} className={tablecolor}>
                    <td><span>{teams.position}</span></td>
                    <td><span>{teams.teamName}</span></td>
                    <td><span>{teams.points}</span></td>
                    <td><span>{teams.wins}</span></td>
                    <td><span>{teams.draws}</span></td>
                    <td><span>{teams.losses}</span></td>
                  </tr>
    })
    return (
      <tbody>
        {teamTableListOut}
      </tbody>
    )
  }
}
