import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

export class User {
  name: string;
  email: string;
  senha: string;

  constructor(name: string, email: string, senha: string) {
    this.name = name;
    this.email = email;
    this.senha = senha;
  }
}

@Injectable()
export class UserProvider {

  access: any;

  currentUser: User;
  user1 = new User('Administrador', 'adm@adm', 'admin');
  user2 = new User('Fulano', 'fulano@fulano', '1234');
  user3 = new User('Ciclano', 'ciclano@ciclano', '1234');
  user4 = new User('Beltrano', 'beltrano@beltrano', '1234');

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {

        if (credentials.email === this.user1.email && credentials.password === this.user1.senha) {
          this.currentUser = this.user1;
          this.access = (credentials.password === credentials.password && credentials.email === credentials.email);
        }
        if (credentials.email === this.user2.email && credentials.password === this.user2.senha) {
          this.currentUser = this.user2;
          this.access = (credentials.password === credentials.password && credentials.email === credentials.email);
        }
        if (credentials.email === this.user3.email && credentials.password === this.user3.senha) {
          this.currentUser = this.user3;
          this.access = (credentials.password === credentials.password && credentials.email === credentials.email);
        }
        if (credentials.email === this.user4.email && credentials.password === this.user4.senha) {
          this.currentUser = this.user4;
          this.access = (credentials.password === credentials.password && credentials.email === credentials.email);
        }
        observer.next(this.access);
        observer.complete();
      });

    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
