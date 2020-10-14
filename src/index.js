import React, {Component} from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component{
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition((position) =>{
            let lat = position.coords.latitude;
            this.setState({lat});
        }, (err) =>{
            this.setState({errorMessage: err.message});
        });
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        else if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        else {
            return (
                <Spinner message="Please accept location request"/>
            );
        }
    }

    render(){
        return(
          <div>
              {this.renderContent()}
          </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
