var assert = require('assert');
var googleAnalyticsAB = require('../index');
var gaClone = Object.assign(googleAnalyticsAB)

describe('#sortIsInCurrentTest', () => {
  beforeEach(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  after(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  it('should sort to be in test', () => {
    googleAnalyticsAB._randomBetween = () => (1);
    googleAnalyticsAB.percentage = 20;
    googleAnalyticsAB.name = 'MYTEST';
    assert.equal(googleAnalyticsAB._sortIsInCurrentTest(), true);
  });

  it('should sort to not be in test', () => {
    googleAnalyticsAB._randomBetween = () => (50);
    googleAnalyticsAB.percentage = 20;
    googleAnalyticsAB.name = 'MYTEST';
    assert.equal(googleAnalyticsAB._sortIsInCurrentTest(), false);
  });
});
