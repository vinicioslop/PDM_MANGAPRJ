import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {UserProvider, User, UserList} from '../../providers/user/user';

import { TabsPage } from '../tabs/tabs';

import { LoginPage } from '../login/login';
import { SignPage } from '../sign/sign';

@IonicPage()
@Component({
  selector: 'page-show-users',
  templateUrl: 'show-users.html',
})
export class ShowUsersPage {
  users: UserList[];

  constructor(
    public navCtrl: NavController, 
    private userProvider: UserProvider, 
    private toast: ToastController
    ) 
    {}

  ionViewDidEnter() {
    this.userProvider.getAll()
      .then((result) => {
        this.users = result;
      });
  }

  addUser() {
    this.navCtrl.push('ShowUsersPage');
  }
 
  editUser(item: UserList) {
    this.navCtrl.push('ShowUsersPage', { key: item.key, user: item.user });
  }
 
  removeUser(item: UserList) {
    this.userProvider.remove(item.key)
      .then(() => {
        // Removendo do array de items
        var index = this.users.indexOf(item);
        this.users.splice(index, 1);
        this.toast.create({ message: 'Usuário removido.', duration: 3000, position: 'botton' }).present();
      })
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
