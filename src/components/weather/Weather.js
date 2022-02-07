import React, { Component } from 'react';
import './weather.css';

export default class Weather extends Component {
  render() {
    return <div>
       <h1 className="weather-header">
          Weather
        </h1>
      <div className="weather">
        <article className='loading'>Loading...</article>
      </div>
    </div>;
  }
}
