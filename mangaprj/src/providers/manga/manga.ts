import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';

@Injectable()
export class MangaProvider {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(manga: Manga) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, manga);
  }

  public update(key: string, manga: Manga) {
    return this.save(key, manga);
  }

  private save(key: string, manga: Manga) {
    return this.storage.set(key, manga);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {

    let mangas: MangaList[] = [];

    return this.storage.forEach((value: Manga, key: string, iterationNumber: Number) => {
      let manga = new MangaList();
      manga.key = key;
      manga.manga = value;
      mangas.push(manga);
    })
      .then(() => {
        return Promise.resolve(mangas);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Manga {
  name: string;
  phone: number;
  birth: Date;
  active: boolean;
}

export class MangaList {
  key: string;
  manga: Manga;
}