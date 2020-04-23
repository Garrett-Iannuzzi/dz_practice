const assert = require('chai').assert;
const RedRocks = require('./red-rocks.js');

describe('Red Rocks', function () {

  it('should have a name of a show', function () {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.equal(redRocks.show, 'Some Hip-Hop shit');
  });

  it('should be able to have a list of upcoming shows', () => {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.deepEqual(redRocks.upcomingShows, [])
  });

  it('should have a capacity', () => {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.equal(redRocks.capacity, 9525)
  });

  it('should have the current weather', () => {
    const weather = { temp: 75, status: 'mostly sunny' };
    const redRocks = new RedRocks('Some Hip-Hop shit', weather);

    assert.equal(redRocks.todaysWeather, weather)
  })


});