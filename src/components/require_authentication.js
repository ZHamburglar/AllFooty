import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent){
  class Authentication extends Component {
    static contextTypes= {
      router: React.PropTypes.object
    }
    componentWillMount(){
      if(!this.props.authenticated){
        this.context.router.push('/')

      }
    }
    //This is what makes you actually leave the page on logout rather than just staying on the page after the logout
    componentWillUpdate(nextProps){
      if(!nextProps.authenticated){
        this.context.router.push('/')
      }
    }

    render () {
      console.log(this.context);

      return <ComposedComponent {...this.props} />
    }
  }
  function mapStateToProps(state) {
    return {authenticated: state.authenticated}
  }
  return connect(mapStateToProps)(Authentication);
}
