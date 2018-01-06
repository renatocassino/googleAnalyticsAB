var assert = require('assert');
var googleAnalyticsAB = require('../index');
var gaClone = Object.assign(googleAnalyticsAB)

describe('#isAlreadySorted', () => {
  beforeEach(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  after(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  it('should never sorted before', () => {
    googleAnalyticsAB.storage = {}
    googleAnalyticsAB.name = 'MYTEST'
    assert.equal(googleAnalyticsAB._isAlreadySorted(), false)
  });

  it('should already sorted before', () => {
    googleAnalyticsAB.storage = {MYTEST: true}
    googleAnalyticsAB.name = 'MYTEST'
    assert.equal(googleAnalyticsAB._isAlreadySorted(), true)
  });

  it('should already sorted before, but not in test', () => {
    googleAnalyticsAB.storage = {MYTEST: false}
    googleAnalyticsAB.name = 'MYTEST'
    assert.equal(googleAnalyticsAB._isAlreadySorted(), true)
  });
})
