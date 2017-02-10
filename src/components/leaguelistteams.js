import React, {Component} from 'react';
import {Link} from 'react-router';

import Request from 'superagent';
import _ from 'lodash';
import TeamList from './teamlist'


export default class LeagueListTeams extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var leaguenumber = this.props.leagueId
    return (
      <div>
        <button className="dropbtn">
          <li>
            <Link to={"/league/"+leaguenumber}>{this.props.league.name}</Link>
          </li>
        </button>
        <div className="dropdown-content">
          <TeamList teams={this.props.league.teams}></TeamList>
        </div>
      </div>
    )
  }
}
