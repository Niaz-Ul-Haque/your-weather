import React from "react";

export default class Store extends React.Component {

    constructor(props) {
        super(props);

        //Main App state
        this.state = {
            appName:  "Your Weather"
        }
    }

    //Main render function for the App 
    render(){
        return React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { ...this.state })
        }); 

    }

}