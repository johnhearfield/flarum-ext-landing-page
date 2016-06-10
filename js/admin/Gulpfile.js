var flarum = require('flarum-gulp');

flarum({
  modules: {
    'johnhearfield/landing-page': [
      'src/**/*.js'
    ]
  }
});