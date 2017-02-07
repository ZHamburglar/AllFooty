import React, {Component} from 'react';
import Request from 'superagent';


export default class League extends Component {
  constructor() {
    super();
    this.state = {};
  }



  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page

    var url="http://api.football-data.org/v1/competitions/436/leagueTable";
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      console.log('response', response.body.leagueCaption);


    });
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
    return (
      <div>
      {this.props.params.leagueId}
      This is the league etc.
        <ul>
          <li>Team 1</li>
          <li>Team 2</li>
          <li>Team 3</li>
        </ul>
      </div>
    )
  }
}
