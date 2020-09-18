import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import config from 'itworksbetter/config/environment';

export default class ApplicationRoute extends Route {
  @service headData;

  afterModel() {
    this.headData.base_url = config.site.base_url;
    this.headData.title = config.site.title;
    this.headData.description = config.site.description;
    this.headData.keywords = config.site.keywords;
    this.headData.image = config.site.image;
    this.headData.image_width = config.site.image_width;
    this.headData.image_height = config.site.image_height;
  }
}