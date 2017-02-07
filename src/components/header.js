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
                <Link to="/premier_league/66" >AFC Bournemouth</Link>
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
                <Link to="/la_liga/346">Alaves</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Athletic Bilbao</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Atletico Madrid</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Barcelona</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Celta Vigo</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Deportivo La Coruna</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Eibar</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Espanyol</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Granada</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Las Palmas</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Leganes</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Malaga</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Osasuna</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Real Betis</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Real Madrid</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Real Sociedad</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Sevilla</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Sporting Gijon</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Valencia</Link>
              </li>
              <li>
                <Link to="/la_liga/346">Villarreal</Link>
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
                <a href="#">FC Augsburg</a>
              </li>
              <li>
                <a href="#">Bayer Leverkusen</a>
              </li>
              <li>
                <a href="#">Bayern Munich</a>
              </li>
              <li>
                <a href="#">Borussia Dortmund</a>
              </li>
              <li>
                <a href="#">Borussia Monchengladbach</a>
              </li>
              <li>
                <a href="#">Darmstadt 98</a>
              </li>
              <li>
                <a href="#">Entracht Frankfurt</a>
              </li>
              <li>
                <a href="#">SC Freiburg</a>
              </li>
              <li>
                <a href="#">Hamburger SV</a>
              </li>
              <li>
                <a href="#">Hertha BSC</a>
              </li>
              <li>
                <a href="#">TSG 1899 Hoffenheim</a>
              </li>
              <li>
                <a href="#">FC Ingolstadt</a>
              </li>
              <li>
                <a href="#">1. FC Koln</a>
              </li>
              <li>
                <a href="#">RB Leipzig</a>
              </li>
              <li>
                <a href="#">1. FSV Mainz 05</a>
              </li>
              <li>
                <a href="#">Schalke 04</a>
              </li>
              <li>
                <a href="#">Werder Bremen</a>
              </li>
              <li>
                <a href="#">VfL Wolfsburg</a>
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
