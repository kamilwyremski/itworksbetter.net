'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'itworksbetter',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    },

    site: {
      base_url: 'https://itworksbetter.net',
      title: 'IT Works Better - aplikacje webowe',
      description: 'Projektowanie stron internetowych i aplikacji webowych. Zespół Full Stack Web Developerów, grafików oraz specjalistów SEO',
      keywords: 'strony www, projektowanie stron, full stack web developer, it works better, tworzenie portali',
      image: 'assets/icons/icon-512x512.png',
      image_width: 512,
      image_height: 512,
      email: 'kontakt@itworksbetter.net',
      phone: '+51 990600447',
      shop_url: 'https://skrypty.sattel.pl'
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
  }

  return ENV;
};
