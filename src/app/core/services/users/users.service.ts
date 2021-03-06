import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../../models/user/user.model';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  users: User[] = [];

  constructor(private localStorage: LocalStorageService) {}

  setSesion(currentUser: User): void {
    this.localStorage.setSesion(currentUser);
  }

  auth(user: string, password: string): any{
    if (this.users.length === 0) {
      this.loardUsers();
    }
    for (const currentUser of this.users) {
      if (
        currentUser.nickName === user &&
        currentUser.password === password
      ) {
        return currentUser;
      }
    }
    return null;
  }

  loardUsers(): any {
    this.users = this.localStorage.getUsers();
  }

  logout(): void {
    this.localStorage.logOut();
  }
}
