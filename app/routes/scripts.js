import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'itworksbetter/config/environment';

export default class ScriptsRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Skrypty stron www - IT Works Better';
    this.headData.description = 'Skrypty stron internetowych. '+config.site.description;
  }

  model() {
    return fetch('/api/scripts.json').then(res => res.json()).then(json => json.data);
  }
}
