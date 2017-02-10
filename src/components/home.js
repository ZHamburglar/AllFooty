import React from 'react';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="container">
        <div className="allfootyhome">
          AllFooty
        </div>
        <div className="allfootyhomelogo">
          <img className="" src="/src/images/all-footy-logo.png" alt="hello.jpg"/>
        </div>
      </div>
    )
  }
}
