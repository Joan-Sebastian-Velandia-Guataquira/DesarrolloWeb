import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.model';
import dataEyes from './../../../files/eyes.json';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  lipsProducts: Product[] = [];
  faceProducts: Product[] = [];
  eyesProducts: Product[] = [];

  constructor() { }

  loadJsonFile(): void{
    console.log('reading eyes.json');
    this.eyesProducts = dataEyes as Product[];
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

}
