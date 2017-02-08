import React from 'react';
import Request from 'superagent';


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
    console.log("Running 1");
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

  componentWillReceiveProps() {
    console.log("Running 2");
    this.getTeam();
  }

  componentWillUpdate() {
    // Called when the props and/or state change

  }

  componentWillUnmount() {
    // Called when the component is removed
    console.log("Running 3");
    this.getTeam();
  }

  updateSearch() {
    console.log("Running 4");
    this.getTeam();
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
