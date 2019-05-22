import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ConfigPage } from '../pages/config/config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,

    FavoritosPage,
    ConfigPage,

    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBAQSIjLNRAok0EAl0iZgYUnYM-aoCBJTg",
      authDomain: "mangaprj.firebaseapp.com",
      databaseURL: "https://mangaprj.firebaseio.com",
      projectId: "mangaprj",
      storageBucket: "mangaprj.appspot.com",
      messagingSenderId: "257075144435",
      appId: "1:257075144435:web:526c5b91954892d4"
    }),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,

    FavoritosPage,
    ConfigPage,

    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
