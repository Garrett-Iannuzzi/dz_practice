const assert = require('chai').assert;
const RedRocks = require('./red-rocks.js');

describe('Red Rocks', function () {

  it('should have a name of a show', function () {
    const redRocks = new RedRocks('Some Hip-Hop shit');
    assert.equal(redRocks.show, 'Some Hip-Hop shit');
  });

  it('should be able to have a list of upcoming shows', () => {
    const redRocks = new RedRocks('Some Hip-Hop shit');

    assert.equal(redRocks.upcomingShows, [])
  });


});