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

  auth(user: User): boolean {
    if (this.users.length === 0) {
      this.loardUsers();
    }
    for (const currentUser of this.users) {
      console.log(currentUser.nickName + ' '  + user.nickName);
      console.log(currentUser.password + ' '  + user.password);
      if (
        currentUser.nickName === user.nickName &&
        currentUser.password === user.password
      ) {
        return true;
      }
    }

    return false;
  }

  loardUsers(): any {
    this.users = this.localStorage.getUsers();
  }
}
