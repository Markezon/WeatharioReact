import WeatherService from "../../services/WeatherService";

const weatherService = new WeatherService();

weatherService
  .getWeatherAirDetails()
  .then((res) => console.log(res.list[0].components));

const AirQuality = () => {
  return (
    <div className="airquality_wrapper">
      <div className="card-head">
        <p>Air Quality Index</p>
        <p className="air-index">aqiList</p>
      </div>

      <div className="air-indices">
        <i className="fa-regular fa-wind fa-3x"></i>
        <div className="item">
          <p>PM2.5</p>
          <h2>xxxx</h2>
        </div>

        <div className="item">
          <p>PM10</p>
          <h2>xxxx</h2>
        </div>

        <div className="item">
          <p>SO2</p>
          <h2>xxxx</h2>
        </div>

        <div className="item">
          <p>CO</p>
          <h2>xxxx</h2>
        </div>

        <div className="item">
          <p>NO</p>
          <h2>xxxx</h2>
        </div>

        <div className="item">
          <p>NO2</p>
          <h2>$xxx</h2>
        </div>

        <div className="item">
          <p>NH3</p>
          <h2>xxx</h2>
        </div>

        <div className="item">
          <p>O3</p>
          <h2>xxxx</h2>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
