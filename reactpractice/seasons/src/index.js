import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

/* functional component that does the same thing as below
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );

    return <div>Latitude: </div>
};
*/

// class based component (can tell component to rerender)
class App extends React.Component {
    /*
    constructor(props) {
        super(props);

        // this is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: ''};
    }
    */

    // this line of code is exactly same function as constructor code above
    state = { lat: null, errorMessage: ''};

    // getCurrentPosition can also be called inside the constructor
    // (like it was placed before) but good practice is to put it in
    // componentDidMount() bc if someone else is working on ur code
    // they can get all the info they need, organized in CDM()
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),

                // we did not do this !!!
                // this.state.lat = position.coords.latitude (bc direct assignment)
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // rerenders first, then componentDidUpdate() is called
    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    }

    renderContent() {
        // conditional rendering depending on the situation
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request.." />;
    }

    // react says we HAVE to define render!!!
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(
    <App />, document.querySelector('#root')
);