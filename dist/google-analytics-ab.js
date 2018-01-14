(function() {
  var googleAnalyticsAB = {
    storage: typeof localStorage !== 'undefined' ? localStorage : {},

    create: function(config) {
      this.init(config);

      if(!this._isAlreadySorted()) {
        if(this._sortIsInCurrentTest()) {
          this.storage[this.name] = this._sortOneOption().name;
        } else {
          this.storage[this.name] = false;
        }
      }

      if(!this.storage[this.name]) return;

      var option = this._getCurrentOption();
      option['convert'] = this.convert.bind(this);
      this.selectedOption = option;

      if(config.run && typeof config.run === 'function') {
        config.run.call(this, option);
      }

      return this;
    },

    init: function(config) {
      this.name = config.name;
      this.percentage = config.percentage || 80;
      this.options = config.options.map(function(option) {
        return Object.assign({}, {
          weight: 1
        }, option);
      });
    },

    convert: function() {
      if(typeof ga !== 'function') {
        console.error('You must have the ga script in your page');
        return false;
      }

      ga('send', {
        hitType: 'event',
        eventCategory: 'googleAnalyticsAB',
        eventAction: this.name,
        eventLabel: this.selectedOption.name, // Aqui eu diferencio se clicou no A ou B
        eventValue: 1,
      });

      return true;
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
      var total = this.options.reduce(function(op1, op2) {
        return op1.weight + op2.weight;
      });

      var sorted = this._randomBetween(1, total);

      for(var i=0,qt=this.options.length; i<qt; i++) {
        sorted -= this.options[i].weight;
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
