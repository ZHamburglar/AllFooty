import React, {Component} from 'react';
import {Link} from 'react-router';

import Request from 'superagent';
import _ from 'lodash';
import TeamList from './teamlist'


export default class LeagueListTeams extends Component {
  constructor(props) {
    super(props);
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

  updateSearch() {
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
