import React, { Component } from 'react';
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Title</h1>
        </header>
        <p className="App-int">Some text</p>
      </div>
    )
  }
}

export class Link extends Component {
  render(){
    return <a href={this.props.address}>Click</a>
  }
}

export class LinkOpt extends Component {
  render(){
    return this.props.hide ? null : <a href={this.props.address}>Click</a>
  }
}

export default App;
