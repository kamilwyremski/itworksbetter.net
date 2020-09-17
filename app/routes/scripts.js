import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import ENV from 'itworksbetter/config/environment';

export default class ScriptsRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Skrypty stron www - '+ENV.site.title;
  }

  async model() {
    return fetch('/api/scripts.json').then(res => res.json()).then(json => json.data);
  }
}
