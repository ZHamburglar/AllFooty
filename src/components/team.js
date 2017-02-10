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

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page

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

    componentWillUpdate() {
      // Called when the props and/or state change

    }

    componentWillUnmount() {
      // Called when the component is removed
    }

    updateSearch() {}

    render() {
      /*
      var dateString = this.state.isoTime;
      var ISO_8601_re = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{2}))?(Z|[\+-]\d{2}(?::\d{2})?)$/,
        m = dateString.match(ISO_8601_re);
      var year = m[1],
        month = +m[2],
        dayOfMonth = +m[3],
        hour = +m[4],
        minute = +m[5],
        second = +m[6],
        ms = +m[7], // +'' === 0
        timezone = m[8];
      if (timezone === 'Z')
        timezone = 0;
      else
        timezone = timezone.split(':'),
        timezone = +(timezone[0][0] + '1') * (60 * (+ timezone[0].slice(1)) + (+ timezone[1] || 0));
      // timezone is now minutes
      // your prefered way to construct
      var myDate = new Date();
      myDate.setUTCFullYear(year);
      myDate.setUTCMonth(month - 1);
      myDate.setUTCDate(dayOfMonth);
      myDate.setUTCHours(hour);
      myDate.setUTCMinutes(minute + timezone); // timezone offset set here, after hours
      myDate.setUTCSeconds(second);
      myDate.setUTCMilliseconds(ms);
      console.log(myDate); //
      */
      return (
        <div>
          <div className="row teamtitleline">
            {this.state.teamName}
            <img className="teamimage" src={this.state.crestUrl}/>
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
