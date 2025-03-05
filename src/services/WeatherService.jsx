class WeatherService {
  _apiBase = "https://api.openweathermap.org/";

  _apiKey = "d57e7dd67678ae3df53bfb464eebf81a";

  lat = "55.7504461";
  lon = "37.6174943";
  /* cnt = "5"; */

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
      /*       day: null,
      month: null,
      year: null, */
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
  getDayForecastDetails = async () => {
    const res = await this.getResource(
      `${this._apiBase}data/2.5/forecast?lat=${this.lat}&lon=${this.lon}&appid=${this._apiKey}`
    );
    return this._transformDayForecastDetails(res);
  };

  _transformDayForecastDetails = (res) => {
    const data = res.list.map((item) => ({
      dayNumber: new Date(item.dt_txt).getDate(),
      day: item.dt_txt.toLocaleString("en-US", { weekday: "long" }),
      month: item.dt_txt.toLocaleString("en-US", { month: "short" }),
      temp: item.main.temp,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    }));

    const filteredData = Object.values(
      data.reduce((acc, item) => {
        const { dayNumber, temp } = item;
        if (!acc[dayNumber] || acc[dayNumber].temp < temp) {
          acc[dayNumber] = item;
        }
        return acc;
      }, {})
    );

    /* console.log(data); */
    console.log(filteredData);
    return filteredData;

    /*     let uniqueForecastDays = [];
    let fiveDaysForecast = res.list.filter((forecast) => {
      let forecastDate = new Date(forecast.dt_txt).getDate();

      console.log(forecastDate);

      if (!uniqueForecastDays.includes(forecastDate)) {
        return uniqueForecastDays.push(forecastDate);
      }
    }); */

    /*     uniqueForecastDays.map((f) => ({
      day: this.getDate.days[f.],
      month: this.getDate.months[5],
    })) */
    /* console.log(uniqueForecastDays, fiveDaysForecast); */

    /*     map((item) => ({
      dayNumber: new Date(item.dt_txt).getDate(),
      day: item.dt_txt.toLocaleString('en-US', { month: 'short' }),
      month: item.dt_txt.toLocaleString('en-US', { weekday: 'long' }),
      temp: item.main.temp,
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    })) */

    /*     console.log(
      uniqueForecastDays,
      fiveDaysForecast.map((item, i) => ({
        day: uniqueForecastDays[i],
        temp: item.main.temp,
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      }))
    ); */

    /*     return {
      days: uniqueForecastDays,
      temp: fiveDaysForecast.map(function(item) {
      return {
        temp: item.main.temp
        icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
      }}),
      
    }; */
  };

  /*   _transformDayForecastDetails = (res) => {
    console.log(
      res.list.reduce((acc, item) => {
        const date = item.dt_txt.split(" ")[0]; // Получаем YYYY-MM-DD
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item.main.temp);
        return acc;
      }, {})
    );
  }; */

  /*   const getFiveDayAvgTemp = (data) => {
    const dailyData = data.list.reduce((acc, item) => {
        const date = item.dt_txt.split(" ")[0]; // Получаем YYYY-MM-DD
        if (!acc[date]) {
            acc[date] = { temps: [] };
        }
        acc[date].temps.push(item.main.temp);
        return acc;
    }, {});

    return Object.keys(dailyData)
        .slice(0, 5) // Берем только 5 дней
        .map(date => ({
            date,
            avgTemp: (dailyData[date].temps.reduce((sum, t) => sum + t, 0) / dailyData[date].temps.length).toFixed(1)
        }));
}; */

  //CityCoordinates

  getCityCoordinates = async () => {
    let cityName = "Moscow";
    return this.getResource(
      `${this._apiBase}geo/1.0/direct?q=${cityName}&limit=1&appid=${this._apiKey}`
    );
  };

  //UserLocation

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
