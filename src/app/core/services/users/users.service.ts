import { Injectable } from '@angular/core';
import { User } from '../../models/user/user.model';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private localStorage: LocalStorageService
  ){}

  setSesion(currentUser: User): void
  {
    this.localStorage.setSesion(currentUser);
  }

}
