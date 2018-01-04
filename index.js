(function() {
  var googleAnalyticsAB = {
    _randomBetween: function(min, max) {
      return Math.floor(Math.random() * max) + min;
    },

    _sortOneOption: function(options) {
      var total = options.reduce((op1, op2) => (
        (op1.weight || 1) + (op2.weight || 1)
      ));
      var sorted = this._randomBetween(0, total);

      for(var i=0,qt=options.length; i<qt; i++) {
        sorted -= (options[i].weight || 1);
        if(sorted <= 0) return options[i];
      }
    }
  }

  if (typeof define === 'function' && define.amd) {
    // AMD
    define('googleAnalyticsAB', [], googleAnalyticsAB);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = googleAnalyticsAB;
  } else {
    // Browser globals
    window.googleAnalyticsAB = googleAnalyticsAB;
  }
})();
