import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//import { Firebase } from '@ionic-native/firebase';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
