import React, {Component} from "react";
import ReactDOM from "react-dom";


class App extends Component{
    render(){
        let lat, lon;
        window.navigator.geolocation.getCurrentPosition((position) =>{
            console.log(position);
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat);
            console.log(lon);
        }, (err) =>{
            console.log(err);
        });
        return <div>Latitude: </div>
    }
}


ReactDOM.render(<App/>, document.querySelector("#root"));