import React, {Component} from 'react';
import {Link} from 'react-router';
import Request from 'superagent';
import _ from 'lodash';


export default class TeamList extends Component {
  constructor(props) {
    super(props);
  }



  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    // console.log('URL STUFF', this.props.leagueUrlId);
    // let leagueIdAddin = this.props.leagueUrlId;
    // console.log('API Url for Teams: ', leagueIdAddin);
    // var url="http://api.football-data.org/v1/competitions/"+leagueIdAddin+"/teams";
    // Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
    //   console.log('response Teams List', response.body.teams);
    //   this.setState({
    //     teamslist: response.body.teams,
    //   })
    // });
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

  updateSearch() {
  }

  render() {
    var teamsList = _.map(this.props.teams, (team, i) => {
      var teamstring = team._links.self.href
      var parts = teamstring.split("/");
      var result = parts[parts.length - 1];
      return <li key={i}><Link to={"/team/"+result}>{team.name}</Link></li>
    })
    return (
      <div className="dropdown-content dropdownscroll">
        {teamsList}
      </div>
    )
  }
}
