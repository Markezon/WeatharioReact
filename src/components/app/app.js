import { Component } from "react";
import WeatherService from "../../services/WeatherService";
import AppHeader from "../appHeader/AppHeader";
import AirQuality from "../airQuality/AirQuality";
import CurrentWeather from "../currentWeather/CurrentWeather";
import SunriseSunset from "../sunriseSunset/SunriseSunset";
import Forecast from "../forecast/Forecast";
import WeatherDetails from "../weatherDetails/WeatherDetails";
import TodayForecast from "../todayForecast/TodayForecast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 55.7504461,
      lon: 37.6174943,
      country: "",
      city: "",
    };
  }

  weatherService = new WeatherService();

  componentDidMount() {
    this.updateUserCoordinates();
  }

  updateUserCoordinates = () => {
    this.weatherService.getUserCoordinates().then((res) => {
      this.setState({
        lat: res.lat,
        lon: res.lon,
        city: res.city,
        country: res.country,
      });
    });
  };

  onSearch = (cityName) => {
    this.weatherService.getCityCoordinates(cityName).then((data) => {
      this.setState({
        lat: data.lat,
        lon: data.lon,
        country: data.country,
        city: data.name,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <main>
          <AppHeader
            onSearch={this.onSearch}
            updateUserCoordinates={this.updateUserCoordinates}
          />
          <div className="weather-data">
            <div className="weather-left">
              <CurrentWeather
                lat={this.state.lat}
                lon={this.state.lon}
                country={this.state.country}
                city={this.state.city}
              />
              <TodayForecast lat={this.state.lat} lon={this.state.lon} />
            </div>

            <div className="weather-right">
              <h2>Today's Highlights</h2>
              <div className="highlights">
                <AirQuality lat={this.state.lat} lon={this.state.lon} />
                <SunriseSunset lat={this.state.lat} lon={this.state.lon} />
                <WeatherDetails lat={this.state.lat} lon={this.state.lon} />
              </div>

              <h2>5 days forecast</h2>
              <Forecast lat={this.state.lat} lon={this.state.lon} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
