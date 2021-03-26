import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import config from 'itworksbetter/config/environment';

export default class ProjectsRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Projekty aplikacji webowych - IT Works Better';
    this.headData.description = 'Projekty aplikacji webowych. '+config.site.description;
  }

  model() {
    return fetch('/api/projects.json').then(res => res.json()).then(json => json.data);
  }
}
