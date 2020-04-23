class RedRocks {
  constructor(showName, weatherDetails, calendarDetails, numOfAttendees) {
    this.show = showName;
    this.upcomingShows = [];
    this.capacity = 9525;
    this.todaysWeather = weatherDetails;
    this.calendar = calendarDetails;
    this.open = true;
    this.attendees = numOfAttendees || 0;
  }

  atCapacity(currentCapacity) {
    if(this.capacity < currentCapacity) {
      return 'Sorry, full...'
    }
    return 'Have fun!'
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

  calculations() {
    const ticketsLeft = this.capacity - this.attendees
    return `We have ${ticketsLeft} tickets left.`
  }

  close() {
    this.open = !this.open;
  }

}

module.exports = RedRocks; 