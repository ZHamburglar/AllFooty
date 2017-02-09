import React from 'react';



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page

  }

  componentDidMount() {

  }



  componentWillReceiveProps(nextProps) {

  }

  componentWillUpdate() {
    // Called when the props and/or state change

  }

  componentWillUnmount() {
    // Called when the component is removed
    console.log("Running 3");
  }

  updateSearch() {
  }


  render() {

    return (
      <div>
        Hello there
      </div>
    )
  }
}
