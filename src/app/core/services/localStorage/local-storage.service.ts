import { Injectable } from '@angular/core';

import { User } from '../../models/user/user.model';
import { Product } from '../../models/product/product.model';

import dataEyes from './../../../files/eyes.json';
import dataLips from './../../../files/lips.json';
import dataFace from './../../../files/face.json';
import dataUser from './../../../files/users.json';
import dataOrders from './../../../files/orders.json';
import { Order } from '../../models/order/order.model';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  lipsProducts: Product[] = [];
  faceProducts: Product[] = [];
  eyesProducts: Product[] = [];
  orders: Order[] = [];
  users: User[] = [];

  currentUser = 'CURRENT_USER';
  objectKey: any;

  constructor() {}

  getEyesProducts(): Product[] {
    console.log('there are ' + this.eyesProducts.length + ' eyes products');
    if (this.eyesProducts.length === 0) {
      this.eyesProducts = dataEyes as Product[];
    }
    return this.eyesProducts;
  }

  getLipsProducts(): Product[] {
    console.log('there are ' + this.lipsProducts.length + ' lips products');
    if (this.lipsProducts.length === 0) {
      this.lipsProducts = dataLips as Product[];
    }
    return this.lipsProducts;
  }

  getFaceProducts(): Product[] {
    console.log('there are ' + this.faceProducts.length + ' face products');
    if (this.faceProducts.length === 0) {
      this.faceProducts = dataFace as Product[];
    }
    return this.faceProducts;
  }

  getOrders(): Order[] {
    if (this.orders.length === 0) {
      this.orders = dataOrders as Order[];
    }
    return this.orders;
  }

  getUsers(): User[] {
    if (this.users.length === 0) {
      this.users = dataUser as User[];
    }
    return this.users;
  }

  setSesion(currentUser: User): void {
    localStorage.setItem(this.currentUser, JSON.stringify(currentUser));
  }

  isLogIn(): boolean {
    if (this.getItem(this.currentUser) !== null) {
      return true;
    } else {
      return false;
    }
  }

  getItem(key: string): any {
    if (localStorage.getItem(key) !== null) {
      return JSON.parse(localStorage.getItem(key) || '{}');
    } else {
      return null;
    }
  }
}
