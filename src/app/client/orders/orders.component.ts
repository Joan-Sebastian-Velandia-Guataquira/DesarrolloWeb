import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user/user.model';
import { LocalStorageService } from 'src/app/core/services/localStorage/local-storage.service';
import { OrdersService } from 'src/app/core/services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  user!: User;
  constructor(
    private ordersService: OrdersService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit(): void {
    /* this.user = localStorage. */

  }

}
