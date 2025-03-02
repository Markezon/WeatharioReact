import { Component } from "react";
import WeatherService from "../../services/WeatherService";

class AirQuality extends Component {
  constructor(props) {
    super(props);
    this.updateAirDetails();
  }

  state = {
    co: null,
    no: null,
    no2: null,
    o3: null,
    so2: null,
    pm2_5: null,
    pm10: null,
    nh3: null,
  };

  weatherService = new WeatherService();

  updateAirDetails = () => {
    this.weatherService.getWeatherAirDetails().then((res) => {
      this.setState(res);
    });
  };

  render() {
    const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = this.state;
    return (
      <div className="card">
        <div className="card-head">
          <p>Air Quality Index</p>
          {/*           <p className="air-index aqi-${data.list[0].main.aqi}">
            {aqiList[data.list[0].main.aqi - 1]}
          </p> */}
        </div>

        <div className="air-indices">
          <i className="fa-regular fa-wind fa-3x"></i>
          <div className="item">
            <p>PM2.5</p>
            <h2>{pm2_5}</h2>
          </div>

          <div className="item">
            <p>PM10</p>
            <h2>{pm10}</h2>
          </div>

          <div className="item">
            <p>SO2</p>
            <h2>{so2}</h2>
          </div>

          <div className="item">
            <p>CO</p>
            <h2>{co}</h2>
          </div>

          <div className="item">
            <p>NO</p>
            <h2>{no}</h2>
          </div>

          <div className="item">
            <p>NO2</p>
            <h2>{no2}</h2>
          </div>

          <div className="item">
            <p>NH3</p>
            <h2>{nh3}</h2>
          </div>

          <div className="item">
            <p>O3</p>
            <h2>{o3}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default AirQuality;
