'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    lang: "en-US",
    name: "IT Works Better - bo nie wystarczy żeby działało",
    short_name: "IT Works Better",
    description: "Projektowanie stron internetowych i aplikacji webowych. Zespół Full Stack Web Developerów, grafików oraz specjalistów SEO",
    start_url: "/",
    scope: "/",
    display: "fullscreen",
    background_color: "#ededed",
    theme_color: "#ededed",
    orientation: "any",
    icons: [
      {
        "src": "assets/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "assets/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "assets/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "assets/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "assets/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "assets/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any maskable"
      },
      {
        "src": "assets/icons/icon-180x180.png",
        "sizes": "180x180",
        "type": "image/png",
        "targets": ['apple']
      },
      {
        "src": "assets/icons/icon-150x150.png",
        "element": "square150x150logo",
        "targets": ['ms']
      }
    ],
    apple: {
      statusBarStyle: 'black-translucent'
    },
    ms: {
      tileColor: '#343d30'
    }
  };
}
