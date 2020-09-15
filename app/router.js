import EmberRouter from '@ember/routing/router';
import config from 'itworksbetter/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('scripts', { path: '/skrypty' });
  this.route('projects', { path: '/projekty' });
  this.route('privacy-policy', { path: '/polityka-prywatnosci' });
});
