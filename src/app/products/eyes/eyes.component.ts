import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product.model';
import {LocalStorageService } from './../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent implements OnInit {

  eyesProducts: Product[] = [];
  /* *isLogin: boolean; */

  constructor(
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void
  {
    this.eyesProducts = this.localStorage.getEyesProducts();
  }
}
