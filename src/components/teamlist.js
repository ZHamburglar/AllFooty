import React, {Component} from 'react';
import Request from 'superagent';
import _ from 'lodash';


export default class TeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: ''
    };
  }



  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    console.log('URL STUFF', this.props.leagueUrlId);
    let leagueIdAddin = this.props.leagueUrlId;
    console.log('API Url for Teams: ', leagueIdAddin);
    var url="http://api.football-data.org/v1/competitions/"+leagueIdAddin+"/teams";
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      console.log('response Teams List', response.body);
      this.setState({
        teams: response.body.teams
      })


    });
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
    var teams = _.map(this.state.teams, (teams) => {
      return <li>{teams.name}</li>
    })
    return (
      <div>
        <li>{teams}</li>
      </div>
    )
  }
}
