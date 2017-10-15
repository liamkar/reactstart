//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
  render() {
    let txt = this.props.txt;
    return  (

    <div>
      <h1>Hello world</h1>
      <b>Bold</b>
      <p>{txt}</p>
    </div>
    )
  }
}

App.propTypes = {
  //Note React.PropTypes is deprecated
  txt: PropTypes.string,
  cat: PropTypes.number
}

//stateless function component
//const App = () => <h1>Hello</h1>
export default App;
