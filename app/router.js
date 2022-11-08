import EmberRouter from '@ember/routing/router';
import config from 'itworksbetter/config/environment';

import Route from '@ember/routing/route';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Route.reopen({
  activate: function() {
    this._super();
    window.scrollTo?.(0, 0);
    if(typeof document !== 'undefined' && "activeElement" in document){
      document.activeElement.blur();
    }
  }
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('scripts' );
  this.route('projects' );
  this.route('privacy-policy' );
  this.route('error404', { path: '/*path' });
});
