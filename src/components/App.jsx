import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'some text',
      stateText: "text from state",
      inputField: '',
      hasLoaded: false
    };
  }

  onInputChange = (e) => {
    this.setState({ inputField: e.target.value });
  };
  changeLoaded = () => {
    this.setState({ hasLoaded: !this.state.hasLoaded });
  };
  render() {
    if (this.state.hasLoaded) {
      return (
        <>
          <h1>{this.props.text}</h1>
          <h1>{this.state.text}</h1>
          <input
            value={this.state.inputField}
            type="text"
            placeholder={this.state.stateText}
            onChange={(e) => this.onInputChange(e)}
          />
           
        </>
      );
    } else {
      return (
        <>
          <h1>Loading...</h1>
          <button onClick={this.changeLoaded}>Click me</button>
        </>
      );
    }
  }

  //   const App = (props) => {
  //       return (
  //           <h1>
  //               {this.props.text}
  //           </h1>
  //       )
  //   }
}

export default App;





