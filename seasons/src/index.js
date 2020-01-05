import React from 'react'; 
import ReactDOM from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

class App extends React.Component{
    state = {lat: null, errorMessage: ''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}), 
            (error) => this.setState({errorMessage: error.message})
        )
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) { 
        return <div>Error: {this.state.errorMessage}</div>
        }
        
        if (this.state.lat && !this.state.errorMessage) {
        return <SeasonDisplay lat={this.state.lat} /> 
        }

        return <Spinner />
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
); 