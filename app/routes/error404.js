import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class Error404Route extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Błąd 404 - '+config.site.title;
    this.headData.description = 'Błąd 404. '+config.site.description;
  }
}
