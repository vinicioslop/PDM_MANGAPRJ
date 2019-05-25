import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMangaPage } from './edit-manga';

@NgModule({
  declarations: [
    EditMangaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMangaPage),
  ],
})
export class EditMangaPageModule {}
