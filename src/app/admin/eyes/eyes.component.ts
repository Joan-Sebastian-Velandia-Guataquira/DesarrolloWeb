import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product.model';
import {LocalStorageService } from './../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-eyes',
  templateUrl: './eyes.component.html',
  styleUrls: ['./eyes.component.scss']
})
export class EyesComponent implements OnInit {

  EyesProducts : Product []=[];

  constructor(
    private localStorage: LocalStorageService)
    { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void
  {
    this.EyesProducts = this.localStorage.getEyesProducts();
  }
}
