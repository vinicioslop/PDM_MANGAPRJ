import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  name = '';
  email = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private user: UserProvider) {

    let info = this.user.getUserInfo();
    this.name = info['name'];
    this.email = info['email'];
  }

  ionViewDidLoad() { }

  public logout() {
    this.user.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
