'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    prember: {
      urls: ['/', '/scripts', '/projects', '/privacy-policy', '/error404'],
    },
    'asset-cache': {
      include: ['assets/**/*', 'api/**/*'],
    },
    fingerprint: {
      extensions: ['js', 'css'],
    },
  });
  return app.toTree();
};
