import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MangaProvider, Manga } from '../../providers/manga/manga';

@IonicPage()
@Component({
  selector: 'page-edit-manga',
  templateUrl: 'edit-manga.html',
})
export class EditMangaPage {

  model: Manga;
  key: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private mangaProvider: MangaProvider, private toast: ToastController) {
    if (this.navParams.data.contact && this.navParams.data.key) {
      this.model = this.navParams.data.manga;
      this.key =  this.navParams.data.key;
    } else {
      this.model = new Manga();
    }
  }

  save() {
    this.saveManga()
      .then(() => {
        this.toast.create({ message: 'Manga salvo.', duration: 3000, position: 'botton' }).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao salvar o manga.', duration: 3000, position: 'botton' }).present();
      });
  }

  private saveManga() {
    if (this.key) {
      return this.mangaProvider.update(this.key, this.model);
    } else {
      return this.mangaProvider.insert(this.model);
    }
  }

}