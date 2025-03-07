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
    };
  }

  weatherService = new WeatherService();

  onSearch = (cityName) => {
    this.weatherService.getCityCoordinates(cityName).then((data) => {
      this.setState({
        lat: data.lat,
        lon: data.lon,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <main>
          <AppHeader onSearch={this.onSearch} />
          <div className="weather-data">
            <div className="weather-left">
              <CurrentWeather />
              <TodayForecast />
            </div>

            <div className="weather-right">
              <h2>Today's Highlights</h2>
              <div className="highlights">
                <AirQuality lat={this.state.lat} lon={this.state.lon} />
                <SunriseSunset lat={this.state.lat} lon={this.state.lon}/>
                <WeatherDetails />
              </div>

              <h2>5 days forecast</h2>
              <Forecast />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
