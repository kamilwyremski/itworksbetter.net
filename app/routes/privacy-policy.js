import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class PrivacyPolicyRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.title = 'Polityka prywatności - '+config.site.title;
    this.headData.description = 'Polityka prywatności. '+config.site.description;
  }
}
