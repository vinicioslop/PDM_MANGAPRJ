import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';

import { HomePage } from '../home/home';
 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
 
  constructor(private nav: NavController, private user: UserProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
 
  public createAccount() {
    this.nav.push('SignPage');
  }
 
  public login() {
    this.showLoading()
    this.user.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot(HomePage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}