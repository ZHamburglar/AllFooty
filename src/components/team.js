import React from 'react';
import FootballData from '../api/football-data';
import Request from 'superagent';
import axios from 'axios';


export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soccerdata: '',
      crestUrl: '',
      teamId: this.props.params.teamId
    };
  }



  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page

  }

  componentDidMount() {

    this.getTeam();
  }

  getTeam(){
    // Called when the props provided to the component are changed
    let teamIdName = this.state.teamId;
    console.log('teamIdName', teamIdName);
    var url = "http://api.football-data.org/v1/teams/" + teamIdName;
    Request.get(url)
      .set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd')
      .then((response) => {
        console.log('response', response.body);
        this.setState({
          soccerdata: response.body.name,
          crestUrl: response.body.crestUrl
        })
      });
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      teamId: newProps.params.teamId
    })

    this.getTeam()
  }

  componentWillUpdate() {
    // Called when the props and/or state change

  }

  componentWillUnmount() {
    // Called when the component is removed
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }


  render() {

    return (
      <div>
      This is a soccer team
      <ul>
      {this.state.soccerdata}
       <li> Soccer! </li>
       <li> Is! </li>
       <li> Fun! </li>
      </ul>
      <img src={this.state.crestUrl} />
      </div>
    )
  }
}
