import React, {Component} from 'react';
import Request from 'superagent';
import LeagueTable from './leaguetable';
import News from './news'


export default class League extends Component {
  constructor() {
    super();
    this.state = {
    };
  }


  getLeague(){
    // Called when the props provided to the component are changed
    let leagueIdName = this.props.params.leagueId
    var url="http://api.football-data.org/v1/competitions/"+leagueIdName;
    Request.get(url).set('X-Auth-Token', '8921bea73c794f8b848353c45f0eeebd').then((response) => {
        console.log('response for league', response.body);
        this.setState({
          leagueName: response.body.caption

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
      {/*this.props.params.leagueId*/}
      <h1 className="leaguetitleline">{this.state.leagueName}</h1>
      <div className="row">
        <div className="col-xs-6 col-md-6 col-lg-6">
          <News></News>
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6">
          <LeagueTable leagueId={this.props.params.leagueId}></LeagueTable>
        </div>

      </div>


      </div>
    )
  }
}
