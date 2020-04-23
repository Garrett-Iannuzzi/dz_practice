class RedRocks {
  constructor(showName, weatherDetails, calendarDetails) {
    this.show = showName;
    this.upcomingShows = [];
    this.capacity = 9525;
    this.todaysWeather = weatherDetails;
    this.calendar = calendarDetails;
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

  checkCalendar() {
    if(this.calendar.length > 0) {
      return this.upcomingShows = this.calendar;
    } else {
      return 'No shows on the schedule'
    }
  }

}

module.exports = RedRocks; 