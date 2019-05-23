import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { UserProvider, User } from '../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  model: User;
  key: string

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private userProvider: UserProvider, 
    private toast: ToastController)
    {
      if (this.navParams.data.user && this.navParams.data.key) {
        this.model = this.navParams.data.user;
        this.key =  this.navParams.data.key;
      } else {
        this.model = new User();
      }
  }

  save() {
    this.saveUser()
      .then(() => {
        this.toast.create({ message: 'Conta criado com sucesso.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao criar a conta.', duration: 3000, position: 'botton' }).present();
      });
  }
 
  private saveUser() {
    if (this.key) {
      return this.userProvider.update(this.key, this.model);
    } else {
      return this.userProvider.insert(this.model);
    }
  }
 
}