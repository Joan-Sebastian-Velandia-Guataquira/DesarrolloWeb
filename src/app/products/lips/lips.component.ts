import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product.model';
import {LocalStorageService } from './../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-lips',
  templateUrl: './lips.component.html',
  styleUrls: ['./lips.component.scss']
})
export class LipsComponent implements OnInit {

  lipsProducts: Product[] = [];

  constructor( private localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void
  {
    this.lipsProducts = this.localStorage.getLipsProducts();
  }

}
