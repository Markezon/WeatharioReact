import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import WeatherService from "../../services/WeatherService";

class TodayForecast extends Component {
  state = {
    data: [],
    loading: true,
    error: false,
  };

  weatherService = new WeatherService();

  componentDidMount() {
    this.updateDayForecastDetails();
  }

  onDataLoaded = (data) => {
    this.setState({
      data,
      loading: false,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  updateDayForecastDetails = () => {
    this.weatherService
      .getDayForecastDetails()
      .then(this.onDataLoaded)
      .catch(this.onError);
  };

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <div className="card" key={`${item.time}-${item.temp}-${item.icon}`}>
          <p>{item.time}</p>
          <img src={item.icon} alt="hourly-forecast" />
          <p>{(item.temp - 273.15).toFixed(2)}&deg;C</p>
        </div>
      );
    });
  }

  render() {
    const { data, loading, error } = this.state;
    const items = Array.isArray(data) ? this.renderItems(data) : null;

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
      <div className="hourly-forecast">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

export default TodayForecast;
