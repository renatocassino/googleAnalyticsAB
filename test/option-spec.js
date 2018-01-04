var assert = require('assert');
var googleAnalyticsAB = require('../index');
var gaClone = Object.assign(googleAnalyticsAB)

describe('#sortOneOption', () => {
  beforeEach(function() {
    googleAnalyticsAB = Object.assign(gaClone)
  });

  it('should select first option', () => {
    var options = [{name: 'a', weight: 1}, {name: 'b', weight: 1}]
    googleAnalyticsAB._randomBetween = function(a,b) { return 1 }
    assert.equal(googleAnalyticsAB._sortOneOption(options).name, 'a')
  })

  it('should select second option', () => {
    var options = [{name: 'a', weight: 1}, {name: 'b', weight: 1}]
    googleAnalyticsAB._randomBetween = function(a,b) { return 2 }
    assert.equal(googleAnalyticsAB._sortOneOption(options).name, 'b')
  })

  it('should select with multiple options', () => {
    var options = [
      {name: 'a', weight: 1},
      {name: 'b', weight: 1},
      {name: 'c', weight: 1},
      {name: 'd', weight: 1},
    ]
    googleAnalyticsAB._randomBetween = function(a,b) { return 4 }
    assert.equal(googleAnalyticsAB._sortOneOption(options).name, 'd')
  })

  it('should select with different weights', () => {
    var options = [
      {name: 'a', weight: 1},
      {name: 'b', weight: 5},
      {name: 'c', weight: 9},
      {name: 'd', weight: 2},
    ]

    googleAnalyticsAB._randomBetween = function(a,b) { return 6 }
    assert.equal(googleAnalyticsAB._sortOneOption(options).name, 'b')

    googleAnalyticsAB._randomBetween = function(a,b) { return 7 }
    assert.equal(googleAnalyticsAB._sortOneOption(options).name, 'c')
  })

  it('should select options with empty weight param', () => {
    var options = [{name: 'a'}, {name: 'b'}]
    googleAnalyticsAB._randomBetween = function(a,b) { return 1 }
    assert.equal(googleAnalyticsAB._sortOneOption(options).name, 'a')
  })
})
