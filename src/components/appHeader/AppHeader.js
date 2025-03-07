import { Component, createRef } from "react";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.cityInput = createRef();
  }

  handleCurrentLocation = () => {
    this.props.updateUserCoordinates();
  };

  handleSearch = () => {
    const cityName = this.cityInput.current.value.trim();
    if (cityName) {
      this.props.onSearch(cityName);
      this.cityInput.current.value = "";
    }
  };

  handleKeyDown = (event) => {
    if (event.key === "Enter") {
      this.handleSearch();
    }
  };

  render() {
    return (
      <header className="header">
        <h2>Weather</h2>

        <div className="wheather-input">
          <input
            type="text"
            ref={this.cityInput}
            name="city"
            id="city_input"
            placeholder="Enter city name"
            onKeyDown={this.handleKeyDown}
          />
          <button type="button" id="searchBtn" onClick={this.handleSearch}>
            <i className="fa-regular fa-search"></i> Search
          </button>
          <button
            type="button"
            id="locationBtn"
            onClick={this.handleCurrentLocation}
          >
            <i className="bx bx-target-lock"></i> Current Location
          </button>
        </div>
      </header>
    );
  }
}

export default AppHeader;
