var assert = require('assert');
var googleAnalyticsAB = require('../index');
var gaClone = Object.assign(googleAnalyticsAB)

describe('#getCurrentOption', () => {
  beforeEach(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  after(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  it('should get side A', () => {
    googleAnalyticsAB.storage = {MYTEST: 'side-a'};
    googleAnalyticsAB.name = 'MYTEST';
    googleAnalyticsAB.options = [{name: 'side-a'}, {name: 'side-b'}];
    assert.equal(googleAnalyticsAB._getCurrentOption(), googleAnalyticsAB.options[0]);
  });

  it('should get side B', () => {
    googleAnalyticsAB.storage = {MYTEST: 'side-b'};
    googleAnalyticsAB.name = 'MYTEST';
    googleAnalyticsAB.options = [{name: 'side-a'}, {name: 'side-b'}];
    assert.equal(googleAnalyticsAB._getCurrentOption(), googleAnalyticsAB.options[1]);
  });
});
