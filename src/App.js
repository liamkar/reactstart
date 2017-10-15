//import React, { Component } from 'react';
import React from 'react';

class App extends React.Component {
  render() {
    return  (
    <div>
      <h1>Hello world</h1>
      <b>Bold</b>
      <p>{this.props.txt}</p>
    </div>
    )
  }
}
//stateless function component
//const App = () => <h1>Hello</h1>
export default App;
