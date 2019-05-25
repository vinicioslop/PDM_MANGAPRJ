import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MangaFireProvider } from './../../providers/manga-fire/manga-fire';

@IonicPage()
@Component({
  selector: 'page-manga-fire-edit',
  templateUrl: 'manga-fire-edit.html',
})
export class MangaFireEditPage {

  title: string;
  form: FormGroup;
  manga: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private provider: MangaFireProvider,
    private toast: ToastController) {

    // maneira 1
    this.manga = this.navParams.data.manga || {};
    this.createForm();

    // // maneira 2
    // this.manga = { };
    // this.createForm();

    // if (this.navParams.data.key) {
    //   const subscribe = this.provider.get(this.navParams.data.key).subscribe((c: any) => {
    //     subscribe.unsubscribe();

    //     this.manga = m;
    //     this.createForm();
    //   })
    // }

    this.setupPageTitle();
  }

  private setupPageTitle() {
    this.title = this.navParams.data.manga ? 'Alterando manga' : 'Novo manga';
  }

  createForm() {
    this.form = this.formBuilder.group({
      key: [this.manga.key],
      titulo: [this.manga.titulo, Validators.required],
      capa: [this.manga.capa, Validators.required],
      descricao: [this.manga.descricao, Validators.required],
      faixa_etaria: [this.manga.faixa_etaria, Validators.required],
      genero: [this.manga.genero, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.provider.save(this.form.value)
        .then(() => {
          this.toast.create({ message: 'Contato salvo com sucesso.', duration: 3000 }).present();
          this.navCtrl.pop();
        })
        .catch((e) => {
          this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000 }).present();
          console.error(e);
        })
    }
  }
}