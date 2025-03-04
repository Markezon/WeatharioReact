/* import { Component } from "react";
import WeatherService from "../../services/WeatherService";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.updateDayForecastDetails();
  }

  state = {
    res: [],
  };

  weatherService = new WeatherService();

  updateDayForecastDetails = () => {
    this.weatherService.getDayForecastDetails().then((res) => {
      this.setState(res);
    });
  };

  renderItems(arr) {
    return arr.map((item) => {
      return (
        <div className="forecast-item">
          <div className="icon-wrapper">
            <img src={item.icon} alt="forecast_img" />
            <span>{item.temp}&deg;C</span>
          </div>
          <p>
            {item.dayNumber}
            {item.day}
          </p>
          <p>{item.month}</p>
        </div>
      );
    });
  }

  render() {
    const { res } = this.state;
    const items = this.renderItems(res);
    return (
      <div className="card">
        <h2>5 days Forecast</h2>
        <div className="day-forecast">{items}</div>
      </div>
    );
  }
}

export default Forecast;
 */