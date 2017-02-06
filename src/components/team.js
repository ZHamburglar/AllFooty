import React from 'react';


export default class Team extends React.Component{
  render(){
    return (
      <div >
      {this.props.params.teamId}
      This is a soccer team
      <ul>
      <li > Soccer! < /li>
      <li > Is! < /li>
      <li > Fun! < /li>
      </ul>
      </div>
    )
  }
}
