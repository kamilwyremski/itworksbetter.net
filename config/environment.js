'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'itworksbetter',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/],
    },

    site: {
      base_url: '/',
      title: 'IT Works Better - web applications',
      description:
        'Designing websites and web applications. A team of Full Stack Web Developers, graphic designers and SEO specialists',
      keywords:
        'websites, website design, full stack web developer, it works better, creating portals',
      image: 'assets/icons/icon-512x512.png',
      image_width: 512,
      image_height: 512,
      email: 'info@itworksbetter.net',
      shop_url: 'https://sklep.itworksbetter.net/',
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.site.base_url = 'https://itworksbetter.net';
  }

  return ENV;
};
