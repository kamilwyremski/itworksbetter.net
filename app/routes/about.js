import Route from '@ember/routing/route';
import { service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class AboutRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'About - IT Works Better';
    this.headData.description =
      'About IT Works Better. ' + config.site.description;
    this.headData.canonical = config.site.base_url + '/about';
    this.headData.applyToDocument();
  }
}
