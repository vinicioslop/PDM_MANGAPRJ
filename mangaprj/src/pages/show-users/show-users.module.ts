import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowUsersPage } from './show-users';

@NgModule({
  declarations: [
    ShowUsersPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowUsersPage),
  ],
})
export class ShowUsersPageModule {}
