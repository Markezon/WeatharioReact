import { Component } from "react";
import WeatherService from "../../services/WeatherService";

class SunriseSunset extends Component {
  constructor(props) {
    super(props);
    this.updateSunRiseSetDetails();
  }

  state = {
    sRiseTime: null,
    sSetTime: null,
  };

  weatherService = new WeatherService();

  updateSunRiseSetDetails = () => {
    this.weatherService.getSunRiseSetDetails().then((res) => {
      this.setState(res);
    });
  };

  render() {
    const { sRiseTime, sSetTime } = this.state;
    return (
      <div className="card">
        <div className="card-head">
          <p>Sunrise & Sunset</p>
        </div>
        <div className="sunrise-sunset">
          <div className="item">
            <div className="icon">
              <i className="fa-light fa-sunrise fa-4x"></i>
            </div>
            <div>
              <p>Sunrise</p>
              <h2>{sRiseTime}</h2>
            </div>
          </div>

          <div className="item">
            <div className="icon">
              <i className="fa-light fa-sunset fa-4x"></i>
            </div>
            <div>
              <p>Sunset</p>
              <h2>{sSetTime}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SunriseSunset;
