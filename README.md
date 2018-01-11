# Google Analytics AB

[![Build Status](https://travis-ci.org/tacnoman/googleAnalyticsAB.svg?branch=master)](https://travis-ci.org/tacnoman/googleAnalyticsAB)

## Getting started

```bash
$ npm i --save google-analytics-ab
```

## Create your own first test

You must have GA script in your page.

```html
.....
<script src="https://rawgit.com/tacnoman/googleAnalyticsAB/master/dist/google-analytics-ab.min.js"></script>
.....
```

```js

  var myTest = googleAnalyticsAB.create({
    name: 'MY_TEST', // Name of your first test
    percentage: 80, // Percentage of users to run in this test

    // Alternatives
    options: [
      {
        name: 'green-button', // Name of your alternative
        weight: 1, // weight of your alternative (optional)
      },
      {
        name: 'red-button',
        weight: 1
      }
    ],

    // Method called when AB is sorted
    run: function(option) { // Current option
      document.getElementById('label').innerHTML = `SIDE ${option.name}`;
      var myButton = document.getElementById('myButton');
      myButton.style.background = option.name === 'green-button' ? '#0F0' : '#F00';

      // Event onClick in button tested
      myButton.addEventListener('click', function(ev) {
        option.convert(); // Method to convert
      });
    }
  });

```
