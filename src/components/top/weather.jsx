import React from 'react';
import SunImg from '../../resources/images/pngguru.com.png';

export default class Weather extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div className="weather-container">
            <div className="header">
                Location Name
            </div>
            <div className="inner-container">
                <div className="image">
                    <img src={SunImg}/>
                </div>
                <div className="current-weather">
                    10
                </div>
            </div>
            <div className="footer">
                Sunnnny
            </div>
        </div>
    }
}