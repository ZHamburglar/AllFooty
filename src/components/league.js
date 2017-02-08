import React, {Component} from 'react';
import Request from 'superagent';
import LeagueTable from './leaguetable';


export default class League extends Component {
  constructor() {
    super();
    this.state = {};
  }


  getLeague(){
    // Called when the props provided to the component are changed
    let leagueIdName = this.props.params.leagueId
    var url="http://api.football-data.org/v1/competitions/"+leagueIdName;
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
        console.log('response', response.body);
        this.setState({

        })
      });
  }
  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page



  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    this.getLeague()
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
    console.log('hello')
    this.getLeague()
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
    return (
      <div>
      {this.props.params.leagueId}
      This is the league etc.
        <ul>
          <li>Team 1</li>
          <li>Team 2</li>
          <li>Team 3</li>
        </ul>
        <LeagueTable leagueId={this.props.params.leagueId}></LeagueTable>
      </div>
    )
  }
}
