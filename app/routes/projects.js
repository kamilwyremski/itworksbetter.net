import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import fetch from 'fetch';
import ENV from 'itworksbetter/config/environment';

export default class ProjectsRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Projekty aplikacji webowych - '+ENV.site.title;
  }

  async model() {
    return fetch('/api/projects.json').then(res => res.json()).then(json => json.data);
  }
}
