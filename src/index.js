import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Error from "./Error";
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({ lat: position.coords.latitude, errorMessage: "" }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <Error message={this.state.errorMessage} />;
    }
    if (this.state.lat && this.state.errorMessage === "") {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please Allow Location Access!" />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
