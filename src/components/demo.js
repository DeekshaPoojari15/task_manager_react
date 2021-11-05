import React, { Component } from 'react';

class Demo extends Component {
  state = {
    title: "",
    summary:""
  };

  handleInput1 = event => {
    this.setState({ title: event.target.value });
  };

  handleInput2 = event => {
    this.setState({ summary: event.target.value });
  };

  logValue = () => {
    console.log(this.state.title);
    console.lof(this.state.summary);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInput1} placeholder="Enter Title" />
        <input onChange={this.handleInput2} placeholder="Enter summary" />
        <button onClick={this.logValue}>Create</button>
      </div>
    );
  }
}

export default Demo;