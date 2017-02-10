import React, {Component} from 'react';
import {Link} from 'react-router';
import Request from 'superagent';
import _ from 'lodash';


export default class TeamList extends Component {
  constructor(props) {
    super(props);
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
