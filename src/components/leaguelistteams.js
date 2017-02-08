import React, {Component} from 'react';
import {Link} from 'react-router';

import Request from 'superagent';
import _ from 'lodash';
import TeamList from './teamlist'


export default class LeagueListTeams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      league: '',
      teamsUrl: ''
    };
  }


  getLeagues() {
    let teamIdName = this.props.leagueId;
    var url="http://api.football-data.org/v1/competitions/"+teamIdName;
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      console.log('response Leagues', response.body._links.teams.href);
      this.setState({
        league: response.body.caption,
        teamsUrl: response.body._links.teams.href
      })
    });
  }
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.getLeagues()

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

  updateSearch() {
  }

  render() {
    var leaguenumber = this.props.leagueId
    return (
      <div>
        <button className="dropbtn">
          <li>
            <Link to={"/league/"+leaguenumber} onClick={e => this.getLeagues()}>{this.state.league}</Link>
          </li>
        </button>
        <div className="dropdown-content">
          <TeamList leagueUrlId={this.props.leagueId}></TeamList>
        </div>
      </div>
    )
  }
}
