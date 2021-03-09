import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order/order.model';
import { Product } from 'src/app/core/models/product/product.model';
import { User } from 'src/app/core/models/user/user.model';
import {LocalStorageService } from './../../core/services/localStorage/local-storage.service';

@Component({
  selector: 'app-lips',
  templateUrl: './lips.component.html',
  styleUrls: ['./lips.component.scss']
})
export class LipsComponent implements OnInit {

  lipsProducts: Product[] = [];
  client = false;

  constructor( private localStorage: LocalStorageService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
  }


  loadProducts(): void
  {
    this.lipsProducts = this.localStorage.getLipsProducts();
    if (this.localStorage.getItem('CURRENT_USER') !== null)
    {
      this.client = true;
    }
  }

  generateOrder(item: Product): void
  {
    const buyer: User = this.localStorage.getItem('CURRENT_USER') as User;
    const product: Product = item;
    const products: Product[] = [];
    let amoutOrders: number;
    if (this.localStorage.getItem('amoutOrders') !== null)
    {
      amoutOrders = this.localStorage.getItem('amoutOrders') as number;
    }else
    {
      amoutOrders = 0;
    }
    products.push(product);
    const date = new Date().toDateString() ;
    const newOrder: Order = new Order(buyer.nickName, date, products, product.price );
    this.localStorage.setItem('order' + amoutOrders, newOrder);
    amoutOrders = Number(amoutOrders) + Number(1);
    this.localStorage.setItem('amoutOrders', String(amoutOrders) );
  }

}
