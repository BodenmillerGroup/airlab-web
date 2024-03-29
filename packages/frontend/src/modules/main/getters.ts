import { Getters } from "vuex-smart-module";
import { MainState } from ".";

export class MainGetters extends Getters<MainState> {
  get loginError() {
    return this.state.logInError;
  }

  get dashboardShowDrawer() {
    return this.state.dashboardShowDrawer;
  }

  get dashboardMiniDrawer() {
    return this.state.dashboardMiniDrawer;
  }

  get userProfile() {
    return this.state.userProfile;
  }

  get token() {
    return this.state.token;
  }

  get isLoggedIn() {
    return this.state.isLoggedIn;
  }

  get firstNotification() {
    return this.state.notifications.length > 0 && this.state.notifications[0];
  }

  get processing() {
    return this.state.processing;
  }

  get processingProgress() {
    return this.state.processingProgress;
  }

  get isAdmin() {
    return this.state.userProfile ? this.state.userProfile.isAdmin : false;
  }
}
