const assert = require('chai').assert;
const RedRocks = require('./red-rocks.js');

describe('Red Rocks', function () {

  it('should have a show with a name', function () {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.equal(redRocks.show, 'Some Hip-Hop shit');
  });

  it('should be able to have a list of upcoming shows', () => {
    const redRocks = new RedRocks('Ice T');

    assert.deepEqual(redRocks.upcomingShows, [])
  });

  it('should have a capacity', () => {
    const redRocks = new RedRocks('ACDC');

    assert.equal(redRocks.capacity, 9525)
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

  it('should be able to add some upcoming shows', () => {
    const redRocks = new RedRocks('Snoop', { temp: 75, status: 'mostly sunny' });
    const showToAdd = 'Pretty Lights';

    redRocks.addShow(showToAdd);

    assert.deepEqual(redRocks.upcomingShows, [ showToAdd ]);
  });


});