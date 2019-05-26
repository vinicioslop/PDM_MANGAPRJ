import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { MangaProvider, MangaList } from '../../providers/manga/manga';

import { UserProvider } from '../../providers/user/user';

import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {

  mangas: MangaList[];

  constructor(
    public navCtrl: NavController, 
    private mangaProvider: MangaProvider, 
    private toast: ToastController,
    private user: UserProvider) { }

  ionViewDidEnter() {
    this.mangaProvider.getAll()
      .then((result) => {
        this.mangas = result;
      });
  }

  addManga() {
    this.navCtrl.push('EditMangaPage');
  }

  editManga(item: MangaList) {
    this.navCtrl.push('EditMangaPage', { key: item.key, manga: item.manga });
  }

  removeManga(item: MangaList) {
    this.mangaProvider.remove(item.key)
      .then(() => {
        // Removendo do array de items
        var index = this.mangas.indexOf(item);
        this.mangas.splice(index, 1);
        this.toast.create({ message: 'Manga removido.', duration: 3000, position: 'botton' }).present();
      })
  }

  public logout() {
    this.user.logout().subscribe(succ => {
      this.navCtrl.setRoot(LoginPage)
    });
  }

}