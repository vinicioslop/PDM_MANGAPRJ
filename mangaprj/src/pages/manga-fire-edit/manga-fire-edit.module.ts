import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MangaFireEditPage } from './manga-fire-edit';

@NgModule({
  declarations: [
    MangaFireEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MangaFireEditPage),
  ],
})
export class MangaFireEditPageModule {}
