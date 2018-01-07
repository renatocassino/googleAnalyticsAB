var assert = require('assert');
var googleAnalyticsAB = require('../index');
var gaClone = Object.assign(googleAnalyticsAB)

describe('#convert', () => {
  beforeEach(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  after(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  it('should send to analytics the data', () => {
    var called = false;
    global.ga = function() {called = true;};
    googleAnalyticsAB.storage = {MYTEST: 'side-a'};
    googleAnalyticsAB.name = 'MYTEST';
    googleAnalyticsAB.selectedOption = {name: 'side-a'};
    var converted = googleAnalyticsAB.convert();
    assert.equal(called, true);
    assert.equal(converted, true);
  });

  it('shouldn\'t send to analytics the data and call warning', () => {
    global.ga = undefined;
    googleAnalyticsAB.storage = {MYTEST: 'side-a'};
    googleAnalyticsAB.name = 'MYTEST';
    googleAnalyticsAB.selectedOption = {name: 'side-a'};
    var converted = googleAnalyticsAB.convert();
    assert.equal(converted, false);
  });
});
