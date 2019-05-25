import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class MangaFireProvider {
  private PATH = 'mangas/';

  constructor(private db: AngularFireDatabase) {
  }
 
  getAll() {
    return this.db.list(this.PATH, ref => ref.orderByChild('titulo'))
      .snapshotChanges()
      .map(changes => {
        return changes.map(m => ({ key: m.payload.key, ...m.payload.val() }));
      })
  }
 
  get(key: string) {
    return this.db.object(this.PATH + key).snapshotChanges()
      .map(m => {
        return { key: m.key, ...m.payload.val() };
      });
  }
 
  save(manga: any) {
    return new Promise((resolve, reject) => {
      if (manga.key) {
        this.db.list(this.PATH)
          .update(manga.key, { titulo: manga.titulo, capa: manga.capa, descricao: manga.descricao, faixa_etaria: manga.faixa_etaria, genero: manga.genero, })
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(this.PATH)
          .push({ titulo: manga.titulo, capa: manga.capa, descricao: manga.descricao, faixa_etaria: manga.faixa_etaria, genero: manga.genero, })
          .then(() => resolve());
      }
    })
  }
 
  remove(key: string) {
    return this.db.list(this.PATH).remove(key);
  }
}
