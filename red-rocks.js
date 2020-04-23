class RedRocks {
  constructor(showName, weatherDetails) {
    this.show = showName;
    this.upcomingShows = [];
    this.capacity = 9525;
    this.todaysWeather = weatherDetails;

  }

  atCapacity(currentCapacity) {
    if(this.capacity > currentCapacity) {
      return 'Have fun!'
    }
    return 'Sorry, full...'
  }

  updateWeather(update) {
    this.todaysWeather = update;
  }

  addShow(newShows) {
    this.upcomingShows.push(newShows)
  }





}

module.exports = RedRocks; 