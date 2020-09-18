import EmberRouter from '@ember/routing/router';
import config from 'itworksbetter/config/environment';

import Route from '@ember/routing/route';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Route.reopen({
  render: function() {
    this._super();
    window.scrollTo?.(0, 0);
    if(typeof document !== 'undefined' && "activeElement" in document){
      document.activeElement.blur();
    }
  }
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('scripts', { path: '/skrypty' });
  this.route('projects', { path: '/projekty' });
  this.route('privacy-policy', { path: '/polityka-prywatnosci' });
  this.route('404', { path: '/*path' });
});
