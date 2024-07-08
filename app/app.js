import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'itworksbetter/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

console.info(
  '%cIT %cWorks%c Better',
  'font-family: Montserrat, sans-serif; font-size: 24px;',
  'font-family: Montserrat, sans-serif; font-size: 24px; color: #4cbb17;',
  'font-family: Montserrat, sans-serif; font-size: 24px;',
);
