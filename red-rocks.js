class RedRocks {
  constructor(show, weatherDetails) {
    this.showType = show;
    this.upcomingShows = [];
    this.capacity = 9525;
    this.todaysWeather = weatherDetails;

  }

  updateWeather(update) {
    this.todaysWeather = update;
  }

  addShow(newShows) {
    this.upcomingShows.push(newShows)
  }





}

module.exports = RedRocks; 