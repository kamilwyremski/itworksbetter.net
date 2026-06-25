'use strict';

/* eslint-disable n/no-unpublished-require, n/no-extraneous-require */
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
    minifyJS: {
      enabled: true,
    },
  });
  return app.toTree();
};
