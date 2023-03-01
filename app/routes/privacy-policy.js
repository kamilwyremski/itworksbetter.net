import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class PrivacyPolicyRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Privacy Policy - IT Works Better';
    this.headData.description = 'Privacy Policy. ' + config.site.description;
  }
}
