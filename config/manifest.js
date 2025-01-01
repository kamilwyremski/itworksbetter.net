'use strict';

module.exports = function () {
  return {
    lang: 'en-US',
    name: "IT Works Better - It's just not enough that it works",
    short_name: 'IT Works Better',
    description:
      'Designing websites and web applications: A team of Full Stack Web Developers, graphic designers, and SEO specialists.',
    start_url: '/',
    scope: '/',
    display: 'minimal-ui',
    background_color: '#ededed',
    theme_color: '#59d33c',
    orientation: 'any',
    icons: [
      {
        src: '/assets/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/icons/icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
        targets: ['apple'],
      },
      {
        src: '/assets/icons/icon-150x150.png',
        element: 'square150x150logo',
        targets: ['ms'],
      },
    ],
    screenshots: [
      {
        src: '/assets/screenshots/shot1.png',
        sizes: '400x822',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/assets/screenshots/shot2.png',
        sizes: '400x822',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/assets/screenshots/shot3.png',
        sizes: '400x822',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/assets/screenshots/shot4.png',
        sizes: '400x822',
        type: 'image/png',
        form_factor: 'narrow',
      },
      {
        src: '/assets/screenshots/shot5.png',
        sizes: '1280x676',
        type: 'image/png',
        form_factor: 'wide',
      },
      {
        src: '/assets/screenshots/shot6.png',
        sizes: '1280x676',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
    apple: {
      statusBarStyle: 'black-translucent',
    },
    ms: {
      tileColor: '#274242',
    },
  };
};
