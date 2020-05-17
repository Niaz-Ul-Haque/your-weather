import React from "react";
import './styles.scss';

import Weather from './weather'

export default class TopSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return <div className="top-container">
                <div className="title">
                    Your Weather
                </div>
                <Weather />
                <button className="btn btn-select-location">Select</button>
            </div>;
    }
}