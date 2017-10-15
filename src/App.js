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
      <Button><Heart/>React</Button>
      <Title text="the t"/>
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

const Button = (props) => <button>{props.children}</button>

const Title = (props) => <h1>Title: {props.text}</h1>
Title.propTypes = {
  text(props,propName,component) {
    if(!(propName in props)) {
      return new Error('missing ${propName}')
    }
    if (props[propName].length < 6) {
      return new Error(propName+' was too short')
    }
  }
}


class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

//stateless function component
//const App = () => <h1>Hello</h1>
export default App;
