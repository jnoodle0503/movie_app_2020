import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };
  
  add = () => {
    this.setState(current => ({
        count: current.count + 1
    }));
  }

  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  }

  render() {
    console.log(this.add);
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    ) 
  };
}


const func = () => ({
  name : "jeonginsoo",
  age : 25,
  gender : "M"
});

const f = function() {
  return {
    name : "jeonginsoo",
    age : 25,
    gender : "m"
  }
}

console.log(func());

export default App;
