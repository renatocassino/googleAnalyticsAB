# Google Analytics AB

[![Build Status](https://travis-ci.org/tacnoman/googleAnalyticsAB.svg?branch=master)](https://travis-ci.org/tacnoman/googleAnalyticsAB)

## Getting started

```bash
$ npm i --save google-analytics-ab
```

## Create your own first test

```js

  var myTest = googleAnalyticsAB.create({
    name: 'MY_TEST', // Name of your first test
    percentage: 80, // Percentage of users to run in this test
    
    // Alternatives
    options: [
      {
        name: 'green-button', // Name of your alternative
        weight: 1, // weight of your alternative (optional)
        run: function() { // Method to run
          document.getElementById('label').innerHTML = 'SIDE A';
          document.getElementById('myButton').style.background = '#0F0';
        }
      },
      {
        name: 'red-button',
        weight: 1,
        run: function() {
          document.getElementById('label').innerHTML = 'SIDE B';
          document.getElementById('myButton').style.background = '#F00';
        }
      }
    ]
  });

```
