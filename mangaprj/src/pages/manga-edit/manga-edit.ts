import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MangasProvider } from '../../providers/mangas/mangas';

@IonicPage()
@Component({
  selector: 'page-manga-edit',
  templateUrl: 'manga-edit.html',
})
export class MangaEditPage {
  title: string;
  form: FormGroup;
  manga: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private mangaProvider: MangasProvider,
    private toast: ToastController
  ) {
    // maneira 1
    this.manga = this.navParams.data.manga || {};
    this.createForm();

    // // maneira 2
    // this.manga = { };
    // this.createForm();

    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((m: any) => {
    //     subscribe.unsubscribe();

    //     this.manga = m;
    //     this.createForm();
    //   })
    // }

    this.setupPageTitle()
  }

  private setupPageTitle() {
    this.title = this.navParams.data.manga ? 'Alterando manga' : 'Novo manga';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.manga.key],
      titulo: [this.manga.titulo, Validators.required],
      capa: [this.manga.cap, Validators.required],
      descricao: [this.manga.descricao, Validators.required],
      faixa_etaria: [this.manga.faixa_etaria, Validators.required],
      genero: [this.manga.genero, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.mangaProvider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'manga salvo com sucesso.', duration: 1000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o manga.', duration: 1000 }).present();
          console.error(e);
        })
    }
  }
}
