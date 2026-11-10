import Route from '@ember/routing/route';
import { service } from '@ember/service';
import fetch from 'itworksbetter/utils/fetch';
import config from 'itworksbetter/config/environment';

export default class ProjectsRoute extends Route {
  @service headData;
  @service fastboot;

  afterModel() {
    this.headData.title = 'Web Application Projects - IT Works Better';
    this.headData.description =
      'Web Application Projects. ' + config.site.description;
    this.headData.canonical = config.site.base_url + '/projects';
    this.headData.applyToDocument();
  }

  model() {
    return fetch('/api/projects.json', this.fastboot)
      .then((res) => res.json())
      .then((json) => json.data);
  }
}
