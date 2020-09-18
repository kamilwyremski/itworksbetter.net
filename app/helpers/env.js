import { helper } from '@ember/component/helper';
import config from 'itworksbetter/config/environment';

export default helper(function env(param) {
  return config.site[param];
});
