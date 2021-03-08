import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.model';
import dataEyes from './../../../files/eyes.json';
import dataLips from './../../../files/lips.json';
import dataFace from './../../../files/face.json';
import dataUser from './../../../files/users.json';
import { User } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  lipsProducts: Product[] = [];
  faceProducts: Product[] = [];
  eyesProducts: Product[] = [];
  users: User[] = [];

  currentUser = 'CURRENT_USER';
  objectKey: any;

  constructor() { }

  loadJsonFile(): void{
    console.log('reading eyes.json');
    this.eyesProducts = dataEyes as Product[];
    this.lipsProducts = dataLips as Product[];
    this.faceProducts = dataFace as Product[];
  }

  getEyesProducts(): Product[]
  {
    console.log('there are ' + this.eyesProducts.length + ' eyes products');
    if (this.eyesProducts.length === 0 )
    {
      this.loadJsonFile();
    }
    return this.eyesProducts;
  }

  getLipsProducts(): Product[]
  {
    console.log('there are ' + this.lipsProducts.length + ' lips products');
    if (this.lipsProducts.length === 0 )
    {
      this.loadJsonFile();
    }
    return this.lipsProducts;
  }

  getFaceProducts(): Product[]
  {
    console.log('there are ' + this.faceProducts.length + ' face products');
    if (this.faceProducts.length === 0 )
    {
      this.loadJsonFile();
    }
    return this.faceProducts;
  }

  getUsers(): User[]
  {
    if (this.users.length === 0 )
    {
      this.users = dataUser as User[];
    }
    return this.users;
  }

  setSesion(currentUser: User): void
  {
    localStorage.setItem( this.currentUser , JSON.stringify(currentUser) );
  }

  isLogIn(): boolean
  {
    if( this.getItem(this.currentUser) !== null )
    {
      return true;
    }else{
      return false;
    }
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

}
