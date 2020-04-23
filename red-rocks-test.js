const assert = require('chai').assert;
const RedRocks = require('./red-rocks.js');

describe('Red Rocks', function () {

  it('should have a name of a show', function () {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.equal(redRocks.showType, 'Some Hip-Hop shit');
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
    const redRocks = new RedRocks('Some Hip-Hop shit', { temp: 75, status: 'mostly sunny' });

    assert.deepEqual(redRocks.todaysWeather, { temp: 75, status: 'mostly sunny' });
  });

  it('should be able to update the weather', () => {
    const redRocks = new RedRocks('Some Hip-Hop shit', { temp: 75, status: 'mostly sunny' });
    const weatherUpdate = { temp: 81, status: 'possible rain' };

    redRocks.updateWeather(weatherUpdate);

    assert.deepEqual(redRocks.todaysWeather, weatherUpdate);
  });


});