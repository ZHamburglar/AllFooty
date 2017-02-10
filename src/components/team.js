import React from 'react';
import Request from 'superagent';
import moment from 'moment';
import TeamRoster from './teamroster';
import TeamFixtures from './teamfixtures';
import News from './news'

export default class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: '',
      crestUrl: '',
      teamIdName: '',
      isoTime: '',
      teamId: this.props.params.teamId
    };
  }


  componentDidMount() {
    this.getTeam();
    this.nextGame();
  }

  getTeam() {
    // Called when the props provided to the component are changed
    let teamIdName = this.props.params.teamId;
    /*console.log('teamIdName', teamIdName);*/
    var url = "http://api.football-data.org/v1/teams/" + teamIdName;
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      /*console.log('response team', response.body);*/
      this.setState({teamName: response.body.name, crestUrl: response.body.crestUrl})
    });
  }

  nextGame() {
    let teamNumber = this.props.params.teamId;
    var url = "http://api.football-data.org/v1/teams/" + teamNumber + "/fixtures";
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
      console.log('TeamFixtures: ', response.body.fixtures);
      console.log('length of array', response.body.fixtures.length);
      var p = response.body.fixtures
        var i = p.length,
          ownerData
        var ownerData = p.filter(function(nextGame) {
          return nextGame.result.goalsHomeTeam === null;
        })[0];
        console.log('OwnerData', ownerData);
        this.setState({isoTime: ownerData})
      });
    }

    componentWillReceiveProps(nextProps) {
      this.getTeam();
      this.nextGame();
    }

    render() {
      var theTime = moment(this.state.isoTime.date).format('LLL')
      console.log('The Time Fixed', theTime);
      return (
        <div>
          <div className="row teamtitleline">
            {this.state.teamName}
            <img className="teamimage" src={this.state.crestUrl}/>
            <div className="nextgame">
              <div>Next Game: {theTime}</div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-md-4 col-lg-4">
              <TeamRoster teamRosterId={this.props.params.teamId}></TeamRoster>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-4">
              <News></News>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-4">
              <TeamFixtures teamRosterId={this.props.params.teamId} teamName={this.state.teamName}></TeamFixtures>
            </div>

          </div>

        </div>
      )
    }
  }
