import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardItem } from 'src/app/model/card-item';
import { CardService } from 'src/app/services/card.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit{

  constructor(private cardService: CardService , private orderService : OrderService,private router : Router){}

  ngOnInit(): void {
    this.cardItems = this.cardService.getAll();
    this.calculateTotal();
  }
  total: number = 0;

  calculateTotal(): void {
    this.total = this.cardItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  }

  cardItems = Array<CardItem>();

  remove(i:number): void {
    this.cardService.remove(i);
    this.cardItems=this.cardService.getAll();
    this.calculateTotal();
  }

  order(){
    this.orderService.save(this.cardItems);
    this.router.navigate(['/orders']);
  }

}
