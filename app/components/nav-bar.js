import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavBarComponent extends Component {
  @tracked isOpenMenu = false;

  @action
  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  @action
  closeMenu() {
    this.isOpenMenu = false;
  }
}
