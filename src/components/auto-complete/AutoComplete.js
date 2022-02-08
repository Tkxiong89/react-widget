/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './auto.css';

export default class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ''
    }
  }

  
  selectName = (event) => {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  handleInput = (event) => {
    this.setState({ inputVal: event.currentTarget.value });
  }
  matches = () => {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      const sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }
  render() {
    const results = this.matches().map( (match, i) => {
        return (
          <li key={i} onClick={this.selectName}>{match}</li>
        );
    });
    return <div>
      <h1>Autocomplete</h1>
      <div className='auto'>
      <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
              {results}
          </ul>
      </div>
    </div>;
  }
}
