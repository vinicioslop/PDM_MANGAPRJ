import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { MangasProvider } from '../../providers/mangas/mangas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mangas: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private mangaProvider: MangasProvider,
    private toast: ToastController
  ) {
    this.mangas = this.mangaProvider.getAll();
  }

  newManga() {
    this.navCtrl.push('MangaEditPage');
  }
  editManga(manga: any) {
    // Maneira 1
    this.navCtrl.push('MangaEditPage', { manga: manga });
    // Maneira 2
    // this.navCtrl.push('MangaEditPage', { key: manga.key });
  }
  removeManga(key: string) {
    if (key) {
      this.mangaProvider.remove(key)
        .then(() => {
          this.toast.create({ message: 'Manga removido com sucesso.', duration: 1000 }).present();
        })
        .catch(() => {
          this.toast.create({ message: 'Erro ao remover o manga.', duration: 1000 }).present();
        });
    }
  }
}
