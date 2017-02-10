import React from 'react';
import Request from 'superagent';
import TeamRoster from './teamroster';
import TeamFixtures from './teamfixtures';
import News from './news'


export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
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
    let teamIdName = this.props.params.teamId;
    console.log('teamIdName', teamIdName);
    var url = "http://api.football-data.org/v1/teams/" + teamIdName;
    Request.get(url)
      .set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd')
      .then((response) => {
        console.log('response team', response.body);
        this.setState({
          teamName: response.body.name,
          crestUrl: response.body.crestUrl
        })
      });
  }

  componentWillReceiveProps(nextProps) {
    console.log("Running 2");
    this.getTeam();
  }

  componentWillUpdate() {
    // Called when the props and/or state change

  }

  componentWillUnmount() {
    // Called when the component is removed
    console.log("Running 3");
  }

  updateSearch() {
    console.log("Running 4");
  }


  render() {

    return (
      <div>
        <div className="row teamtitleline">
          {this.state.teamName}
          <img className="teamimage" src={this.state.crestUrl} />
        </div>

        <div className="row">
          <div className="col-xs-6 col-md-4">
            <TeamRoster teamRosterId={this.props.params.teamId}></TeamRoster>
          </div>
          <div className="col-xs-6 col-md-4">
            <News></News>
          </div>
          <div className="col-xs-6 col-md-4">
            <TeamFixtures teamRosterId={this.props.params.teamId}></TeamFixtures>
          </div>

        </div>

      </div>
    )
  }
}
