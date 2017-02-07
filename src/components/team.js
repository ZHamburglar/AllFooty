import React from 'react';
import FootballData from '../api/football-data';
import Request from 'superagent';
import axios from 'axios';

export default class Team extends React.Component {
  constructor() {
    super();
    this.state = {};
  }



  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
    var url = "http://api.football-data.org/v1/teams/66";
    Request.get(url)
    .set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd')
    .then((response) => {
      console.log('response', response.body.name);
      this.setState({
        soccerdata: response.body.name
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
    this.search(this.refs.query.value);
  }

  render() {
    console.log('TeamName', this.state.soccerdata);
    return ( <
      div > {
        this.props.params.teamId
      }
      This is a soccer team <
      ul >
      <
      li > Soccer! < /li> <
      li > Is! < /li> <
      li > Fun! < /li> < /
      ul >
      {this.state.soccerdata}
       </div>
    )
  }
}
