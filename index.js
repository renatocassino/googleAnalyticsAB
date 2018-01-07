(function() {
  var googleAnalyticsAB = {
    storage: typeof localStorage !== 'undefined' ? localStorage : {},

    create: function({
      name,
      percentage,
      options,
      run,
    }) {
      this.init(name, percentage, options);
      if(!this._isAlreadySorted()) {
        if(this._sortIsInCurrentTest()) {
          this.storage[this.name] = this._sortOneOption().name;
        } else {
          this.storage[this.name] = false;
        }
      }

      if(!this.storage[this.name]) return;

      var option = this._getCurrentOption();
      if(run && typeof run === 'function') {
        run(option);
      }

      return this;
    },

    init: function(name, percentage, options) {
      this.name = name;
      this.percentage = percentage;
      this.options = options;
    },

    _getCurrentOption: function() {
      var alternativeName = this.storage[this.name];
      for(var i=0, qt=this.options.length; i<qt; i++) {
        var currentOption = this.options[i];
        if(currentOption.name === alternativeName) {
          return currentOption;
        }
      }
    },

    _isAlreadySorted: function() {
      return !(typeof this.storage[this.name] === 'undefined');
    },

    _sortIsInCurrentTest: function() {
      var sorted = this._randomBetween(0, 100);
      return sorted < this.percentage;
    },

    _randomBetween: function(min, max) {
      return Math.floor(Math.random() * max) + min;
    },

    _sortOneOption: function() {
      var total = this.options.reduce((op1, op2) => (
        (op1.weight || 1) + (op2.weight || 1)
      ));

      var sorted = this._randomBetween(1, total);

      for(var i=0,qt=this.options.length; i<qt; i++) {
        sorted -= (this.options[i].weight || 1);
        if(sorted <= 0) return this.options[i];
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
