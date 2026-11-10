import Route from '@ember/routing/route';
import { service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class ContactRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Contact - IT Works Better';
    this.headData.description =
      'Contact IT Works Better for web development and website scripts.';
    this.headData.canonical = config.site.base_url + '/contact';
    this.headData.applyToDocument();
  }
}
