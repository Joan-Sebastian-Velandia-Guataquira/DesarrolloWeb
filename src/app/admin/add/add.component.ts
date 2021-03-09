import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product.model';
import { LocalStorageService } from './../../core/services/localStorage/local-storage.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  ProductosEyes: Product[] = [];
  ProductosFace: Product[] = [];
  ProductosLips: Product[] = [];

  currentProduct!: Product;

  submitted = false;

  constructor(private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.ProductosLips = this.localStorage.getLipsProducts();
    this.ProductosFace = this.localStorage.getFaceProducts();
    this.ProductosEyes = this.localStorage.getEyesProducts();
  }

  onSubmit(): void {
    this.submitted = true;
    /* this.updateEye(); */
  }


/*   updateEye(): void {
    this.submitted = false;
    this.ProductosEyes = JSON.parse(localStorage.getItem('currentProduct')!);
    localStorage.clear();
    if (this.ProductosEyes == null) {
      this.ProductosEyes = [];
    }
    console.log(this.ProductosEyes);

    localStorage.setItem('currentProduct', JSON.stringify(this.ProductosEyes));
    this.currentProduct = new Product();
  }

  updateFace(): void {
    this.submitted = false;
    this.ProductosFace = JSON.parse(localStorage.getItem('currentProduct')!);
    localStorage.clear();
    if (this.ProductosFace == null) {
      this.ProductosFace = [];
    }
    console.log(this.ProductosFace
    this.ProductsFace.push(this.user);
    localStorage.setItem('currentProduct', JSON.stringify(this.ProductosFace));
    this.currentProduct = new Product();
  } */

}
