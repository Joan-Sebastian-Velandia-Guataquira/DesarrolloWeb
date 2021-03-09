import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product/product.model';
import { User } from 'src/app/core/models/user/user.model';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { LocalStorageService } from './../../core/services/localStorage/local-storage.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  product!: Product;
  EyesProducts: Product[] = [];
  FaceProducts: Product[] = [];
  LipsProducts: Product[] = [];

  hide: boolean = Boolean();
  currentUser!: User;
  loginForm: FormGroup = this.fb.group({
    name: [''],
    price: [''],
    description: [''],
    img: [''],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.EyesProducts = this.localStorage.getEyesProducts();
    this.FaceProducts = this.localStorage.getFaceProducts();
    this.LipsProducts = this.localStorage.getLipsProducts();
  }

  update(): void {
    let newProduct: Product;
    const price = this.loginForm.controls.price.value;
    const name = this.loginForm.controls.description.value;
    const desc = this.loginForm.controls.id.value;
    const img = this.loginForm.controls.img.value;
    const idPrev = this.route.snapshot.paramMap.get('id') as string;

    newProduct = new Product(idPrev, name, img, price, desc);
    const prevProduct = this.getPrev(idPrev) as Product;

    this.productService.change(prevProduct, newProduct);
  }
  getPrev(idPrev: string): Product {
    const productBefore: Product = this.productService.get(idPrev);
    return productBefore;
  }
}
