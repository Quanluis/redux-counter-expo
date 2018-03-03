import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

import Counter from './Counter';


class App extends Component {
  render() {
    console.log(this);
    return (
     <div>
            <Counter {...this.props} />
            <Counter {...this.props} />
     </div>
    );
  }s
}
const mapStateToProps = (state) => {
  return {
    count: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
