class WeatherService {
  _apiBase = "https://api.openweathermap.org/";

  _apiKey = "d57e7dd67678ae3df53bfb464eebf81a";

  lat = "55.7504461";
  lon = "37.6174943";

  setCoordinates(latitude, longitude) {
    this.lat = latitude;
    this.lon = longitude;
  }

  getDate = async () => {
    let date = new Date();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return {
      dayNumber: date.getDate(),
      day: days[date.getDay()],
      month: months[date.getMonth()],
      year: date.getFullYear(),
    };
  };

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }

    return await res.json();
  };

  //AirQuaility

  /*   getWeatherAirDetails22 = async () => {
    return this.getResource(
      `${this._apiBase}data/2.5/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
  }; */

  getWeatherAirDetails = async () => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    return this._transformAirDetails(res.list[0]);
  };

  _transformAirDetails = (data) => {
    return {
      co: data.components.co,
      no: data.components.no,
      no2: data.components.no2,
      o3: data.components.o3,
      so2: data.components.so2,
      pm2_5: data.components.pm2_5,
      pm10: data.components.pm10,
      nh3: data.components.nh3,
      aqi: data.main.aqi,
    };
  };

  /*   getWeatherDetails = async () => {
    return this.getResource(
      `${this._apiBase}data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
  }; */

  //CurrentWeather

  getWeatherDetails = async () => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    return this._transformWeatherDetails(res);
  };

  _transformWeatherDetails = (data) => {
    return {
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      feels_like: data.main.feels_like,
      windSpeed: data.wind.speed,
      visibility: data.visibility,
    };
  };

  //SunRise SunSet

  getSunRiseSetDetails = async () => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    return this._transformSunRiseSetDetails(res);
  };

  _transformSunRiseSetDetails = (res) => {
    return {
      sRiseTime: new Date(res.sys.sunrise * 1000).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sSetTime: new Date(res.sys.sunset * 1000).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  //DayForecast
  /* `${this._apiBase}data/2.5/forecast/daily?lat=${this.lat}&lon=${this.lon}&cnt=${this.cnt}&appid=${this._apiKey}` */
  /* `${this._apiBase}data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}` */
  /////////////////////////
  /*   getDayForecastDetails = async () => {
    return this.getResource(
      `${this._apiBase}data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
  }; */
  /////////////////////////
  getDayForecastDetails = async (param) => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    if (param) {
      return this._transformDayForecastDetails(res);
    } else return this._transformTodayDetails(res);
  };

  _transformTodayDetails = (res) => {
    /*     const today = new Date().toISOString().split("T")[0]; */

    const data = res.list
      .slice(0, 8)
      /*       .filter((item) => item.dt_txt.startsWith(today)) */
      .map((item) => ({
        /*         dayNumber: new Date(item.dt_txt).getDate(), */
        time: item.dt_txt.split(" ")[1].slice(0, 5),
        temp: item.main.temp,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        description: item.weather[0].description,
        description2: item.weather[0].main,
      }));

    console.log(data);
    return data;
  };

  _transformDayForecastDetails = (res) => {
    const today = new Date().getDate();

    const data = res.list.map((item) => ({
      dayNumber: new Date(item.dt_txt).getDate(),
      day: new Date(item.dt_txt.replace(" ", "T")).toLocaleString("en-US", {
        weekday: "long",
      }),
      month: new Date(item.dt_txt.replace(" ", "T")).toLocaleString("en-US", {
        month: "short",
      }),
      temp: item.main.temp,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    }));

    const filteredData = Object.values(
      data.reduce((acc, item) => {
        const { dayNumber, temp } = item;

        if (
          dayNumber !== today &&
          (!acc[dayNumber] || acc[dayNumber].temp < temp)
        ) {
          acc[dayNumber] = item;
        }

        return acc;
      }, {})
    );

    return filteredData;
  };

  //CityCoordinates

  getCityCoordinates = async () => {
    let cityName = "Moscow";
    return this.getResource(
      `${this._apiBase}geo/1.0/direct?q=${cityName}&limit=1&appid=${this._apiKey}`
    );
  };

  //UserLocation
  /*   getUserCoordinates = async () => {
    const { latitude, longitude } =
      navigator.geolocation.getCurrentPosition.position.coords;

    const res = await this.getResource(
      `${this._apiBase}geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${this._apiKey}`
    );
    return this._transformWeatherDetails(res);
  }; */

  /*   getUserCoordinates = async () => {
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
  }; */

  getUserCoordinates = async () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            this.setCoordinates(latitude, longitude); // Обновляем координаты

            const res = await this.getResource(
              `${this._apiBase}geo/1.0/reverse?lat=${this.lat}&lon=${this.lon}&limit=1&appid=${this._apiKey}`
            );
            resolve(this._transformGetUserCoordinates(res));
          },
          (error) => reject(error),
          { enableHighAccuracy: true }
        );
      } else {
        reject(new Error("Geolocation is not supported by this browser."));
      }
    });
  };

  _transformGetUserCoordinates = (data) => {
    return {
      city: data[0].name,
      country: data[0].country,
      lat: data[0].lat,
      lon: data[0].lon,
    };
  };
}

export default WeatherService;
