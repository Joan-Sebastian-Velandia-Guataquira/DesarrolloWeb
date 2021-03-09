import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product.model';
import {LocalStorageService } from './../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss']
})
export class FaceComponent implements OnInit {

  faceProducts: Product[] = [];
  client = false;

  constructor(private localStorage: LocalStorageService) {
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void
  {
    this.faceProducts = this.localStorage.getFaceProducts();
    if (this.localStorage.getItem('CURRENT_USER') !== null)
    {
      this.client = true;
    }
  }

}
