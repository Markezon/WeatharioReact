import AppHeader from "../appHeader/AppHeader";
import AirQuality from "../airQuality/AirQuality";
import CurrentWeather from "../currentWeather/CurrentWeather";

const App = () => {
  return (
    <div className="container">
      <main>
        <AppHeader />
        <div className="weather-data">
          <div className="weather-left">
            {/*             <div className="card">
              <div className="current-weather">
                <div className="details">
                  <p>Now</p>
                  <h2>____&deg;C</h2>
                  <p>____</p>
                </div>
                <div className="weather-icon">
                  <img
                    src="https://openweathermap.org/img/wn/04d@2x.png"
                    alt="weather-icon"
                  />
                </div>
              </div>

              <hr />
              <div className="card-footer">
                <p>
                  <i className="fa-light fa-calendar"></i> ____
                </p>
                <p>
                  <i className="fa-light fa-location-dot"></i> ____
                </p>
              </div>
            </div> */}
            <CurrentWeather />

            <div className="card">
              <h2>5 days Forecast</h2>
              <div className="day-forecast">
                <div className="forecast-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://openweathermap.org/img/wn/02d.png"
                      alt="forecast_img"
                    />
                    <span>____&deg;C</span>
                  </div>
                  <p>____</p>
                  <p>____</p>
                </div>

                <div className="forecast-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://openweathermap.org/img/wn/02d.png"
                      alt="forecast_img"
                    />
                    <span>____&deg;C</span>
                  </div>
                  <p>____</p>
                  <p>____</p>
                </div>

                <div className="forecast-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://openweathermap.org/img/wn/02d.png"
                      alt="forecast_img"
                    />
                    <span>____&deg;C</span>
                  </div>
                  <p>____</p>
                  <p>____</p>
                </div>

                <div className="forecast-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://openweathermap.org/img/wn/02d.png"
                      alt="forecast_img"
                    />
                    <span>____&deg;C</span>
                  </div>
                  <p>____</p>
                  <p>____</p>
                </div>

                <div className="forecast-item">
                  <div className="icon-wrapper">
                    <img
                      src="https://openweathermap.org/img/wn/02d.png"
                      alt="forecast_img"
                    />
                    <span>____&deg;C</span>
                  </div>
                  <p>____</p>
                  <p>____</p>
                </div>
              </div>
            </div>
          </div>

          <div className="weather-right">
            <h2>Today's Highlights</h2>
            <div className="highlights">
              <AirQuality />

              {/*               <div className="card">
                <div className="card-head">
                  <p>Air Quality Index</p>
                  <p className="air-index aqi-1">Good</p>
                </div>
                <div className="air-indices">
                  <i className="fa-regular fa-wind fa-3x"></i>
                  <div className="item">
                    <p>PM2.5</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>PM10</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>SO2</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>CO</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>NO</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>NO2</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>NH3</p>
                    <h2>____</h2>
                  </div>

                  <div className="item">
                    <p>O3</p>
                    <h2>____</h2>
                  </div>
                </div>
              </div> */}

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
                      <h2>____</h2>
                    </div>
                  </div>

                  <div className="item">
                    <div className="icon">
                      <i className="fa-light fa-sunset fa-4x"></i>
                    </div>
                    <div>
                      <p>Sunset</p>
                      <h2>____</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <p>Humidity</p>
                </div>
                <div className="card-item">
                  <i className="fa-light fa-droplet fa-2x"></i>
                  <h2 id="humidityVal">____%</h2>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <p>Pressure</p>
                </div>
                <div className="card-item">
                  <i className="fa-light fa-compass fa-2x"></i>
                  <h2 id="pressureVal">____hPa</h2>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <p>Visibility</p>
                </div>
                <div className="card-item">
                  <i className="fa-light fa-eye fa-2x"></i>
                  <h2 id="visibilityVal">____km</h2>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <p>Wind Speed</p>
                </div>
                <div className="card-item">
                  <i className="fa-light fa-location-arrow fa-2x"></i>
                  <h2 id="windSpeedVal">____m/s</h2>
                </div>
              </div>

              <div className="card">
                <div className="card-head">
                  <p>Feels like</p>
                </div>
                <div className="card-item">
                  <i className="fa-light fa-temperature-list fa-2x"></i>
                  <h2 id="feelsVal">____&deg;C</h2>
                </div>
              </div>
            </div>

            <h2>Today at</h2>
            <div className="hourly-forecast">
              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>

              <div className="card">
                <p>9 AM</p>
                <img
                  src="https://openweathermap.org/img/wn/04d.png"
                  alt="hourly-forecast"
                />
                <p>____&deg;C</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
