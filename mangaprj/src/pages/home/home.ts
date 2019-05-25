import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { MangaFireProvider } from './../../providers/manga-fire/manga-fire';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mangas: Observable<any>;

  username = '';
  email = '';

  constructor(
    private navCtrl: NavController,
    private user: UserProvider,
    private provider: MangaFireProvider,
    private toast: ToastController
  ) {
    let info = this.user.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];

    this.mangas = this.provider.getAll();
  }

  newManga() {
    this.navCtrl.push('MangaFireEditPage');
  }

  editManga(manga: any) {
    // Maneira 1
    this.navCtrl.push('MangaFireEditPage', { manga: manga });

    // Maneira 2
    // this.navCtrl.push('MangaFireEditPage', { key: manga.key });
  }

  removeManga(key: string) {
    if (key) {
      this.provider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Manga removido sucesso.', duration: 3000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o manga.', duration: 3000 }).present();
        });
    }
  }

  public logout() {
    this.user.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }
}
