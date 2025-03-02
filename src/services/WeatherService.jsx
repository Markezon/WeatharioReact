class WeatherService {
  _apiBase = "https://api.openweathermap.org/";

  _apiKey = "d57e7dd67678ae3df53bfb464eebf81a";

  lat = "55.7504461";
  lon = "37.6174943";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }

    return await res.json();
  };

  getWeatherAirDetails = async () => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    return this._transformAirDetails(res.list[0].components);
  };

  _transformAirDetails = (data) => {
    return {
      co: data.co,
      no: data.no,
      no2: data.no2,
      o3: data.o3,
      so2: data.so2,
      pm2_5: data.pm2_5,
      pm10: data.pm10,
      nh3: data.nh3,
    };
  };

  getWeatherDetails = async () => {
    return this.getResource(
      `${this._apiBase}data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
  };

  /* getWeatherDetails = async () => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    return this._transformWeatherDetails(res.list[0].components);
  }; */

  /*   _transformWeatherDetails = (res) => {
    return {
      temp: res.main.temp,
      description: res.weather[0].description,
      icon: res.weather[0].icon,
      //https://doka-guide.vercel.app/js/date///
      //month//
      //year//
      o3: data.o3,
      so2: data.so2,
      pm2_5: data.pm2_5,
      pm10: data.pm10,
      nh3: data.nh3,
    };
  }; */

  getForecastDetails = async () => {
    return this.getResource(
      `${this._apiBase}data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
  };

  getCityCoordinates = async () => {
    let cityName = "Moscow";
    return this.getResource(
      `${this._apiBase}geo/1.0/direct?q=${cityName}&limit=1&appid=${this._apiKey}`
    );
  };

  getUserCoordinates = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const data = await this.getResource(
              `${this._apiBase}geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${this._apiKey}`
            );
            resolve(data);
          } catch (error) {
            reject(error);
          }
        },
        (error) => reject(error),
        { enableHighAccuracy: true }
      );
    });
  };
}

export default WeatherService;
