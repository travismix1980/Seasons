import React, {Component} from "react";
import ReactDOM from "react-dom";


class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            lat: null,
            lon: null,
        };

        window.navigator.geolocation.getCurrentPosition((position) =>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            this.setState({lat, lon});
        }, (err) =>{
            console.log(err);
        });
    }

    render(){
        return (
        <div>
            <h2>Latitude: {this.state.lat}</h2>
            <h2>Longitute: {this.state.lon}</h2>
        </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));