import { Component, OnInit } from '@angular/core';
import { CardItem } from 'src/app/model/card-item';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit{

  constructor(private orderService : OrderService) {}

  orders : Order[] = [];
  ngOnInit(): void {
    this.orders = this.orderService.getAll();
  }





}
