import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MangaEditPage } from './manga-edit';

@NgModule({
  declarations: [
    MangaEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MangaEditPage),
  ],
})
export class MangaEditPageModule {}
