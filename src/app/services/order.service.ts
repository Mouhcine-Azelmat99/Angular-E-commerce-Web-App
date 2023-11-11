import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { CardItem } from '../model/card-item';
import { CardService } from './card.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cardService : CardService) { }
  private localStorageKey = 'orders';

  getAll() : Array<Order>{
    let orders = localStorage.getItem("orders")
    let orders_items : Array<Order> = JSON.parse(orders!);
    return orders_items;
  }

  save(items : Array<CardItem>) : void{
    let orders = localStorage.getItem("orders")
    let orders_items : Array<Order> = JSON.parse(orders!);
    if(orders_items == null ){
      orders_items = [];
    }
    orders_items.push({'order_items' : items});
    localStorage.setItem(this.localStorageKey,JSON.stringify(orders_items));
    this.cardService.reset();
  }
}
