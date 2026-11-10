import Route from '@ember/routing/route';
import { service } from '@ember/service';
import fetch from 'itworksbetter/utils/fetch';
import config from 'itworksbetter/config/environment';

export default class ScriptsRoute extends Route {
  @service headData;
  @service fastboot;

  afterModel() {
    this.headData.title = 'Website Scripts - IT Works Better';
    this.headData.description = 'Website Scripts. ' + config.site.description;
    this.headData.canonical = config.site.base_url + '/scripts';
    this.headData.applyToDocument();
  }

  model() {
    return fetch('/api/scripts.json', this.fastboot)
      .then((res) => res.json())
      .then((json) => json.data);
  }
}
