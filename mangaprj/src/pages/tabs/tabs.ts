import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { ConfigPage } from '../config/config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritosPage;
  tab3Root = ConfigPage;

  constructor() {

  }
}
