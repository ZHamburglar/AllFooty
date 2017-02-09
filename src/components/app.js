import React, { Component } from 'react';
import Header from './header'
import _ from 'lodash';
import Request from 'superagent';



export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      leagues: {
        '426': {
          name: 'Premier League',
          teams: []
        },
        '436': {
          name: 'La Liga',
          teams: []
        },
        '430': {
          name: 'Bundesliga',
          teams: []
        },
        '438': {
          name: 'Serie A',
          teams: []
        },
        '434': {
          name: 'Ligue 1',
          teams: []
        }
      }
    }

  }

  getTeamsForLeagues() {
    _.each(this.state.leagues, (leagueObject, leagueId) => this.getTeamsForLeague(leagueId))
  }

  getTeamsForLeague(leagueId) {
    var url=`http://api.football-data.org/v1/competitions/${leagueId}/teams`
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      let league = Object.assign({}, this.state.leagues[leagueId], {teams: response.body.teams})
      let leagues = Object.assign({}, this.state.leagues, {[leagueId]: league})
      this.setState({ leagues })
    });
  }

  componentDidMount() {
    this.getTeamsForLeagues()
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        leagues: this.state.leagues
      })
    }
    return (
      <div className="background">
        <Header leagues={this.state.leagues} />
        <div className="container">
          {this.props.children }
        </div>
      </div>
    );
  }
}
