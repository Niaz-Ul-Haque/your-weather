import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './sass/app.scss';

import TopSection from './components/top                                                          ';
import BottomSection from './components/bottom';

import axios from 'axios';

const WEATHER_KEY = "5f31142f41cf43c7531b509c9f512529";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Toronto",
      forcastDays: 5,
    }
  }

  componentDidMount() {
    const {cityName, forcastDayes} = this.state;
    URL = "http://api.weatherstack.com/current";

    //Atm working here, will continue later on (If I get the API I wanted for this project)
  }
  
  render() {
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section">
            <TopSection />
          </div>
          <div className="bottom-section">
            <BottomSection />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
