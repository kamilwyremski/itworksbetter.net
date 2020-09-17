import { helper } from '@ember/component/helper';
import ENV from 'itworksbetter/config/environment';

export default helper(function env(param) {
  return ENV.site[param];
});
