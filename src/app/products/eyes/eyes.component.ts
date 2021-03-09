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
  client = false;

  constructor(
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void
  {
    this.eyesProducts = this.localStorage.getEyesProducts();
    if (this.localStorage.getItem('CURRENT_USER') !== null)
    {
      this.client = true;
    }
  }
}
