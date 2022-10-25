import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class Error404Route extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Error 404 - IT Works Better';
    this.headData.description = 'Error 404. ' + config.site.description;
  }
}
