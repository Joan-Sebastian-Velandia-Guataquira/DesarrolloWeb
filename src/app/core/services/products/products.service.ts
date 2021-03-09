import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Product } from '../../models/product/product.model';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  EyesProducts: Product[] = [];
  FaceProducts: Product[] = [];
  LipsProducts: Product[] = [];

  constructor(private localStrorageService: LocalStorageService) {}

  get(idBefore: string): Product {
    let produc: Product;
    if (idBefore.includes('EYE')) {
      produc = this.getEye(idBefore);
    } else if (idBefore.includes('LIPS')) {
      produc = this.getLip(idBefore);
    } else {
      produc = this.getFace(idBefore);
    }
    return produc;
  }

  getLip(idBefore: string): Product {
    let produc!: Product;
    this.LipsProducts = this.localStrorageService.getLipsProducts();

    for (const elem of this.LipsProducts) {
      if (elem.id === idBefore) {
        produc = elem;
        break;
      }
    }
    return produc;
  }
  getFace(idBefore: string): Product {
    let produc!: Product;
    this.FaceProducts = this.localStrorageService.getFaceProducts();
    for (const elem of this.FaceProducts) {
      if (elem.id === idBefore) {
        produc = elem;
        break;
      }
    }
    return produc;
  }

  getEye(idBefore: string): Product {
    let produc!: Product;
    this.EyesProducts = this.localStrorageService.getEyesProducts();
    for (const elem of this.EyesProducts) {
      if (elem.id === idBefore) {
        produc = elem;
        break;
      }
    }
    return produc;
  }
  change(prevProduct: Product, newProduct: Product): void {

  }
}
