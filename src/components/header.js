import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions'

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <button className="btn btn-primary" onClick={() => this.props.authenticate(false)}>Sign Out</button>
    }
    return <button className="btn btn-primary" onClick={() => this.props.authenticate(true)}>Sign In</button>
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
          <div className="dropdown">
            <button className="dropbtn">
              <li>
                <Link to="/league/426">Premier League</Link>
              </li>
            </button>
            <div className="dropdown-content">
              <li>
                <Link to="/premier_league/1044" >AFC Bournemouth</Link>
              </li>
              <li>
                <Link to="/premier_league/57" >Arsenal</Link>
              </li>
              <li>
                <Link to="/premier_league/328" >Burnley</Link>
              </li>
              <li>
                <Link to="/premier_league/61" >Chelsea</Link>
              </li>
              <li>
                <Link to="/premier_league/354" >Crystal Palace</Link>
              </li>
              <li>
                <Link to="/premier_league/62" >Everton</Link>
              </li>
              <li>
                <Link to="/premier_league/322" >Hull City</Link>
              </li>
              <li>
                <Link to="/premier_league/338" >Leicester City</Link>
              </li>
              <li>
                <Link to="/premier_league/64" >Liverpool</Link>
              </li>
              <li>
                <Link to="/premier_league/65" >Manchester City</Link>
              </li>
              <li>
                <Link to="/premier_league/66" >Manchester United</Link>
              </li>
              <li>
                <Link to="/premier_league/343" >Middlesbrough</Link>
              </li>
              <li>
                <Link to="/premier_league/340" >Southampton</Link>
              </li>
              <li>
                <Link to="/premier_league/70" >Stoke City</Link>
              </li>
              <li>
                <Link to="/premier_league/71" >Sunderland</Link>
              </li>
              <li>
                <Link to="/premier_league/72" >Swansea City</Link>
              </li>
              <li>
                <Link to="/premier_league/73" >Tottenham Hotspur</Link>
              </li>
              <li>
                <Link to="/premier_league/346" >Watford</Link>
              </li>
              <li>
                <Link to="/premier_league/74" >West Bromwich Albion</Link>
              </li>
              <li>
                <Link to="/premier_league/563" >West Ham United</Link>
              </li>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              <li>
                <Link to="/league/436">La Liga</Link>
              </li>
            </button>
            <div className="dropdown-content">
              <li>
                <Link to="/la_liga/263">Alaves</Link>
              </li>
              <li>
                <Link to="/la_liga/77">Athletic Bilbao</Link>
              </li>
              <li>
                <Link to="/la_liga/78">Atletico Madrid</Link>
              </li>
              <li>
                <Link to="/la_liga/81">Barcelona</Link>
              </li>
              <li>
                <Link to="/la_liga/558">Celta Vigo</Link>
              </li>
              <li>
                <Link to="/la_liga/560">Deportivo La Coruna</Link>
              </li>
              <li>
                <Link to="/la_liga/278">Eibar</Link>
              </li>
              <li>
                <Link to="/la_liga/80">Espanyol</Link>
              </li>
              <li>
                <Link to="/la_liga/83">Granada</Link>
              </li>
              <li>
                <Link to="/la_liga/275">Las Palmas</Link>
              </li>
              <li>
                <Link to="/la_liga/745">Leganes</Link>
              </li>
              <li>
                <Link to="/la_liga/84">Malaga</Link>
              </li>
              <li>
                <Link to="/la_liga/79">Osasuna</Link>
              </li>
              <li>
                <Link to="/la_liga/90">Real Betis</Link>
              </li>
              <li>
                <Link to="/la_liga/86">Real Madrid</Link>
              </li>
              <li>
                <Link to="/la_liga/92">Real Sociedad</Link>
              </li>
              <li>
                <Link to="/la_liga/559">Sevilla</Link>
              </li>
              <li>
                <Link to="/la_liga/96">Sporting Gijon</Link>
              </li>
              <li>
                <Link to="/la_liga/95">Valencia</Link>
              </li>
              <li>
                <Link to="/la_liga/94">Villarreal</Link>
              </li>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              <li>
                <Link to="/league/430">Bundesliga</Link>
              </li>
            </button>
            <div className="dropdown-content">
              <li>
                <Link to="/bundesliga/16">FC Augsburg</Link>
              </li>
              <li>
                <Link to="/bundesliga/3">Bayer Leverkusen</Link>
              </li>
              <li>
                <Link to="/bundesliga/5">Bayern Munich</Link>
              </li>
              <li>
                <Link to="/bundesliga/4">Borussia Dortmund</Link>
              </li>
              <li>
                <Link to="/bundesliga/18">Borussia Monchengladbach</Link>
              </li>
              <li>
                <Link to="/bundesliga/55">Darmstadt 98</Link>
              </li>
              <li>
                <Link to="/bundesliga/19">Entracht Frankfurt</Link>
              </li>
              <li>
                <Link to="/bundesliga/17">SC Freiburg</Link>
              </li>
              <li>
                <Link to="/bundesliga/7">Hamburger SV</Link>
              </li>
              <li>
                <Link to="/bundesliga/9">Hertha BSC</Link>
              </li>
              <li>
                <Link to="/bundesliga/2">TSG 1899 Hoffenheim</Link>
              </li>
              <li>
                <Link to="/bundesliga/31">FC Ingolstadt</Link>
              </li>
              <li>
                <Link to="/bundesliga/1">1. FC Koln</Link>
              </li>
              <li>
                <Link to="/bundesliga/721">RB Leipzig</Link>
              </li>
              <li>
                <Link to="/bundesliga/15">1. FSV Mainz 05</Link>
              </li>
              <li>
                <Link to="/bundesliga/6">Schalke 04</Link>
              </li>
              <li>
                <Link to="/bundesliga/12">Werder Bremen</Link>
              </li>
              <li>
                <Link to="/bundesliga/11">VfL Wolfsburg</Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {authenticated: state.authenticated}
}

export default connect(mapStateToProps, actions)(Header)
