//import React, { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update (e) {
    this.setState({txt: e.target.value})
  }

  render() {
    let txt = this.props.txt;
    return  (

    <div>
      <Widget update={this.update.bind(this)}/>
      <Widget update={this.update.bind(this)}/>
      <h1>Hello world</h1>
      <b>Bold</b>
      <p>{txt}</p>
      <p>{this.state.txt}</p>
    </div>
    )
  }
}

App.propTypes = {
  //Note React.PropTypes is deprecated
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}

App.defaultProps = {
  txt:"this is the default text"
}

const Widget = (properties) =>
<input type="text" onChange={properties.update}/>

//stateless function component
//const App = () => <h1>Hello</h1>
export default App;
