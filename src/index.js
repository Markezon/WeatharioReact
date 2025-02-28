import { createRoot } from "react-dom/client";
import App from "./components/app/App";

import WeatherService from "./services/WeatherService";

import "./style/style.scss";

console.log(navigator.geolocation.getCurrentPosition);

/* const weatherService = new WeatherService(); */

/* weatherService
  .getWeatherAirDetails()
  .then((res) => console.log(res.list[0].components)); */

/* weatherService.getWeatherDetails().then((res) => console.log(res)); */

/* weatherService.getForecastDetails().then((res) => console.log(res.list)); */

/* weatherService.getCityCoordinates().then((res) => console.log(res[0])); */

/* weatherService.getUserCoordinates().then((res) => console.log(res[0])); */

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
