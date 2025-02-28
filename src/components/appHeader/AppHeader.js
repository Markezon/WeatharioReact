const AppHeader = () => {
  return (
    <header className="header">
      <h2>Weather</h2>

      <div className="wheather-input">
        <input
          type="text"
          name="city"
          id="city_input"
          placeholder="Enter city name"
        />
        <button type="button" id="searchBtn">
          <i className="fa-regular fa-search"></i> Search
        </button>
        <button type="button" id="locationBtn">
          <i className="bx bx-target-lock"></i> Current Location
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
