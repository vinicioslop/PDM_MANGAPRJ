import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import {UserProvider} from '../../providers/user/user';

import { TabsPage } from '../tabs/tabs';

import { LoginPage } from '../login/login';
import { SignPage } from '../sign/sign';

@IonicPage()
@Component({
  selector: 'page-show-users',
  templateUrl: 'show-users.html',
})
export class ShowUsersPage {

  username = '';
  email = '';

  constructor(
    public navCtrl: NavController, 
    private user: UserProvider, 
    private toast: ToastController
    ) 
    {}

  ionViewDidEnter() {
    let info = this.user.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  goToHome(){
    this.navCtrl.setRoot(TabsPage);
    this.navCtrl.popToRoot();
  }
  
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  goToSign(){
    this.navCtrl.push(SignPage);
  }

}
