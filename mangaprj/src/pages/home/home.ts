import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username = '';
  email = '';

  constructor(
    private nav: NavController, 
    private user: UserProvider
  ) {
    let info = this.user.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  public logout() {
    this.user.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }
}
