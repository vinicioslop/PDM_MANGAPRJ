import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { IonicStorageModule } from '@ionic/storage';
import { UserProvider } from '../providers/user/user';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ConfigPage } from '../pages/config/config';
import { LoginPage } from '../pages/login/login';
import { SignPage } from '../pages/sign/sign';

import { LoginPageModule } from '../pages/login/login.module';
import { SignPageModule } from '../pages/sign/sign.module';
import { ShowUsersPageModule } from '../pages/show-users/show-users.module';
import { ShowUsersPage } from '../pages/show-users/show-users';
import { MangaProvider } from '../providers/manga/manga';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,

    FavoritosPage,
    ConfigPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBAQSIjLNRAok0EAl0iZgYUnYM-aoCBJTg",
      authDomain: "mangaprj.firebaseapp.com",
      databaseURL: "https://mangaprj.firebaseio.com",
      projectId: "mangaprj",
      storageBucket: "mangaprj.appspot.com",
      messagingSenderId: "257075144435",
      appId: "1:257075144435:web:526c5b91954892d4"
    }),
    AngularFireDatabaseModule,

    LoginPageModule,
    SignPageModule,
    ShowUsersPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,

    LoginPage,
    SignPage,
    ShowUsersPage,

    FavoritosPage,
    ConfigPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatePipe,
    UserProvider,
    MangaProvider
  ]
})
export class AppModule { }
