'use strict';

module.exports = function() {
  return {
    lang: "en-US",
    name: "IT Works Better - it's just not enough that it works",
    short_name: "IT Works Better",
    description: "Designing websites and web applications. A team of Full Stack Web Developers, graphic designers and SEO specialists",
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
