import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';
import LeagueListTeams from './leaguelistteams'
import _ from 'lodash'

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <button className="dropbtn" onClick={() => this.props.authenticate(false)}>Sign Out</button>
    }
    return <button className="dropbtn" onClick={() => this.props.authenticate(true)}>Sign In</button>
  }

  renderLeagueNav(leagueObject, leagueId) {
    return <li className="nav-item">
        <div key={leagueId} className="dropdown">
          <LeagueListTeams league={leagueObject} leagueId={leagueId} />
        </div>
      </li>

  }

  render() {

    return (
      <nav className="navbar-light">
        <ul className="nav navbar-nav">
            <Link to="/home"><img className="allfootyicon" src="/src/images/allfootyicon.png" alt="hello.jpg"/></Link>

          {_.map(this.props.leagues, (leagueObject, leagueId) => this.renderLeagueNav(leagueObject, leagueId))}

          <li className="nav-item">
              <div className="dropdown">
                <button className="dropbtn">
                  <li>
                    <Link to="/resources">My Teams</Link>
                  </li>
                </button>
              </div>
          </li>


          <li className="nav-item">
            <div className="dropdown">
              {this.authButton()}
            </div>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {authenticated: state.authenticated}
}

export default connect(mapStateToProps, actions)(Header)
