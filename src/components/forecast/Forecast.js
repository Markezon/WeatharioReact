import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import WeatherService from "../../services/WeatherService";

class Forecast extends Component {
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

  param = true;

  updateDayForecastDetails = () => {
    this.weatherService
      .getDayForecastDetails(this.param)
      .then(this.onDataLoaded)
      .catch(this.onError);
  };

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <div
          className="forecast-item"
          key={`${item.dayNumber}-${item.month}-${item.day}`}
        >
          <div className="icon-wrapper">
            <img src={item.icon} alt="forecast_img" />
            <span>{(item.temp - 273.15).toFixed(2)}&deg;C</span>
          </div>
          <p>
            {item.dayNumber} {item.month}
          </p>
          <p>{item.day}</p>
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
      <div className="card">
        <h2>5 days Forecast</h2>
        <div className="day-forecast">
          {errorMessage}
          {spinner}
          {content}
        </div>
      </div>
    );
  }
}

export default Forecast;
