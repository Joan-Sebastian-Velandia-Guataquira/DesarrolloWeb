import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product.model';
import dataEyes from './../../../files/eyes.json';
import dataLips from './../../../files/lips.json';
import dataFace from './../../../files/face.json';

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

}
