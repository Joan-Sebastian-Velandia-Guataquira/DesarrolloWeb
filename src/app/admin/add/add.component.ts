import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product/product.model';
import { User } from 'src/app/core/models/user/user.model';
import { ProductsService } from 'src/app/core/services/products/products.service';
import {LocalStorageService } from './../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  ProductosEyes: Product[] = [];
  ProductosFace: Product[] = [];
  ProductosLips: Product[] = [];
  Product!: Product;

  hide: boolean = Boolean();

  loginForm: FormGroup = this.fb.group({
    name: [''],
    price: [''],
    description: [''],
    img: [''],
    categoria: ['']
  });


  currentProduct!: Product;

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private productService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.ProductosLips = this.localStorage.getLipsProducts();
    this.ProductosFace = this.localStorage.getFaceProducts();
    this.ProductosEyes = this.localStorage.getEyesProducts();
  }

  add(): void {
    this.submitted = true;
    const categ  = this.loginForm.controls.categoria.value;
    const name  = this.loginForm.controls.name.value;
    const description  = this.loginForm.controls.description.value;
    const price  = this.loginForm.controls.price.value;
    const img  = this.loginForm.controls.img.value;

    let amoutProducts: number;
    if (this.localStorage.getItem('amoutProducts') !== null) {
      amoutProducts = this.localStorage.getItem('amoutProducts') as number;
    } else {
      amoutProducts = 0;
    }

    if (categ === 'EYE'){
      const newId: string = 'EYE-' + String(this.ProductosEyes.length);
      this.Product = new Product(newId, name, img, price, description);
      this.localStorage.setItem('new' + amoutProducts, this.Product);

    }
    if (categ === 'FACE'){
      const newId: string = 'FACE-' + String(this.ProductosEyes.length);
      this.Product = new Product(newId, name, img, price, description);
      this.localStorage.setItem('new' + amoutProducts, this.Product);

    }
    if (categ === 'LIP'){
      const newId: string = 'LIP-' + String(this.ProductosEyes.length);
      this.Product = new Product(newId, name, img, price, description);
      this.localStorage.setItem('new' + amoutProducts, this.Product);

    }

  }

}
