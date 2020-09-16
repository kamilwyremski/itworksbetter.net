import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'itworksbetter/config/environment';

export default class ApplicationRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = ENV.title;
  }
}