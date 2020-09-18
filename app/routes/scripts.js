import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'itworksbetter/config/environment';

export default class ScriptsRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Skrypty stron www - '+config.site.title;
    this.headData.description = 'Skrypty stron internetowych. '+config.site.description;
  }

  async model() {
    return fetch('/api/scripts.json').then(res => res.json()).then(json => json.data);
  }
}
