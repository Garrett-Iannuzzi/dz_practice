const assert = require('chai').assert;
const RedRocks = require('./red-rocks.js');

describe('Red Rocks', () => {

  it('should have a show with a name', () => {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.equal(redRocks.show, 'Some Hip-Hop shit');
  });

  it('should be able to have a list of upcoming shows', () => {
    const redRocks = new RedRocks('Ice T');

    assert.deepEqual(redRocks.upcomingShows, []);
  });

  it('should have a capacity', () => {
    const redRocks = new RedRocks('ACDC');

    assert.equal(redRocks.capacity, 9525);
  });

  it('should be able to have a max capacity', () => {
    const redRocks = new RedRocks('Biggy');
    const currentCapacity = 8175;
    const secondCurrentCapacity = 10181;

    redRocks.atCapacity(currentCapacity);
    redRocks.atCapacity(secondCurrentCapacity);

    assert.equal(redRocks.atCapacity(currentCapacity), 'Have fun!');
    assert.equal(redRocks.atCapacity(secondCurrentCapacity), 'Sorry, full...');
  });

  it('should have the current weather', () => {
    const redRocks = new RedRocks('2 Pac', { temp: 75, status: 'mostly sunny' });

    assert.deepEqual(redRocks.todaysWeather, { temp: 75, status: 'mostly sunny' });
  });

  it('should be able to update the weather', () => {
    const redRocks = new RedRocks('Dr. Dre', { temp: 75, status: 'mostly sunny' });
    const weatherUpdate = { temp: 81, status: 'possible rain' };

    redRocks.updateWeather(weatherUpdate);

    assert.deepEqual(redRocks.todaysWeather, weatherUpdate);
  });

  it('should be able to add an upcoming show', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' });
    const showToAdd = { artist: 'Pretty Lights', date: '04/28/2021' };

    redRocks.addShow(showToAdd);

    assert.deepEqual(redRocks.upcomingShows, [ showToAdd ]);
  });

  it('should have a calendar', () => {
    const currentCalendar = [
      { artist: 'Pretty Lights', date: '04/28/2021' },
      { artist: 'Griz', date: '05/01/2021' },
      { artist: 'Kaskade', date: '05/12/2021' },
      { artist: 'Deadmau5', date: '05/21/2021' }
    ]
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, currentCalendar);

    assert.deepEqual(redRocks.calendar, currentCalendar);
  });

  it('should add the calendar to upcoming shows if there are events on the calendar', () => {
    const currentCalendar = [
      { artist: 'Pretty Lights', date: '04/28/2021' },
      { artist: 'Griz', date: '05/01/2021' },
      { artist: 'Kaskade', date: '05/12/2021' },
      { artist: 'Deadmau5', date: '05/21/2021' }
    ]
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, currentCalendar);

    redRocks.checkCalendar();

    assert.deepEqual(redRocks.upcomingShows, currentCalendar);
  });

  it('should return a message if there are no shows to add', () => {
    const currentCalendar = []
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, currentCalendar);

    redRocks.checkCalendar();

    assert.equal(redRocks.checkCalendar(), 'No shows on the schedule');

  });

  it('should start out open', () => {
    const currentCalendar = [
      { artist: 'Pretty Lights', date: '04/28/2021' },
      { artist: 'Griz', date: '05/01/2021' },
      { artist: 'Kaskade', date: '05/12/2021' },
      { artist: 'Deadmau5', date: '05/21/2021' }
    ]
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, currentCalendar);

    assert.equal(redRocks.open, true);
  });

  it('should have a number of 0 attendees by default', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, []);

    assert.equal(redRocks.attendees, 0);
  });

  it('should have a different number of attendees', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, [], 7500);

    assert.equal(redRocks.attendees, 7500);
  });

  it('should be able to figure out how many tickets there are left to sell', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, [], 7500);

    redRocks.calculations();

    assert.equal(redRocks.calculations(), 'We have 2025 tickets left.');
  });

  it('should be able to calculate total sales ($24.57 per) based on number of attendees', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, [], 7500);

    redRocks.calculations();

    assert.equal(redRocks.avgSales, 184275);
  });

  it('should be able to decide if you made bank by making at least $122,850', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, [], 7500);

    redRocks.calculations();

    assert.equal(redRocks.goodNight, true);
  });

  it('should be able to close', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, [], 7500);

    redRocks.close();

    assert.equal(redRocks.open, false);
  });

  it('should have a list of past shows', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, [], 7500);

    assert.deepEqual(redRocks.pastShows, [])
  });

  it('should be able to move the most recent show to past shows', () => {
    const currentCalendar = [
      { artist: 'Pretty Lights', date: '04/28/2021' },
      { artist: 'Griz', date: '05/01/2021' },
      { artist: 'Kaskade', date: '05/12/2021' },
      { artist: 'Deadmau5', date: '05/21/2021' }
    ]
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' }, currentCalendar, 7500);

    redRocks.moveToPastShow();

    assert.deepEqual(redRocks.pastShows, [ { artist: 'Pretty Lights', date: '04/28/2021' } ]);
  });

});