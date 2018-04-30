import React, { Component } from 'react';

class App extends Component {
  state = {
    answer: 52
  };

  asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  render() {
    return (
      <h2>Isaac - Hello From The Other Side -- { this.state.answer }</h2>
    );
  }
}

export default App;
