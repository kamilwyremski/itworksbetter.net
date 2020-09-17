'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    lang: "pl-PL",
    name: "IT Works Better - bo nie wystarczy żeby działało",
    short_name: "IT Works Better",
    description: "Projektowanie stron internetowych i aplikacji webowych. Zespół Full Stack Web Developerów, grafików oraz specjalistów SEO",
    start_url: "/",
    scope: "/",
    display: "fullscreen",
    background_color: "#fff",
    theme_color: "#fff",
    orientation: "any",
    icons: [
      {
        "src": "assets/icons/icon-72x72.png",
        "sizes": "72x72",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-96x96.png",
        "sizes": "96x96",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-128x128.png",
        "sizes": "128x128",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-144x144.png",
        "sizes": "144x144",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-152x152.png",
        "sizes": "152x152",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png",
        "purpose": "maskable any"
      },
      {
        "src": "assets/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable any"
      }
    ],
    ms: {
      tileColor: '#fff'
    }
  };
}
