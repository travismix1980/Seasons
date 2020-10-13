import React, {Component} from "react";
import ReactDOM from "react-dom";


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            errorMessage: '',
        };

        window.navigator.geolocation.getCurrentPosition((position) =>{
            let lat = position.coords.latitude;
            this.setState({lat});
        }, (err) =>{
            this.setState({errorMessage: err.message});
        });
    }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat){
            return<div>Latitude: {this.state.lat}</div>
        }
        else {
            return<div>Loading...</div>
        }
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));