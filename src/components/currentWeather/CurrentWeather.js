import { Component } from "react";
import WeatherService from "../../services/WeatherService";

class CurrentWeather extends Component {
  constructor(props) {
    super(props);
    this.updateWeatherDetails();
    this.updateDate();
  }

  state = {
    temp: null,
    description: null,
    icon: null,
    day: null,
    month: null,
    year: null,
  };

  weatherService = new WeatherService();

  updateWeatherDetails = () => {
    this.weatherService.getWeatherDetails().then((res) => {
      this.setState(res);
    });
  };

  updateDate = () => {
    this.weatherService.getDate().then((res) => {
      this.setState(res);
    });
  };

  render() {
    const { temp, description, icon, day, month, year } = this.state;
    return (
      <div className="card">
        <div className="current-weather">
          <div className="details">
            <p>Now</p>
            <h2>{(temp - 273.15).toFixed(2)}&deg;C</h2>
            <p>{description}</p>
          </div>
          <div className="weather-icon">
            <img src={icon} alt="weather-icon" />
          </div>
        </div>

        <hr />
        <div className="card-footer">
          <p>
            <i className="fa-light fa-calendar"></i>
            {day}, {month}, {year}
          </p>
          <p>
            <i className="fa-light fa-location-dot"></i>{" "}
            {/* ${name}, ${country} */}
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
