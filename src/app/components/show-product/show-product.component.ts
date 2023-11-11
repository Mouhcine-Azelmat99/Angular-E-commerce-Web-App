import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CardService } from 'src/app/services/card.service';
import { CardItem } from 'src/app/model/card-item';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
})
export class ShowProductComponent implements OnInit {

  constructor(private route : ActivatedRoute ,private router : Router, private productService : ProductService ,private cardService : CardService){}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.getById(productId).subscribe(data => this.product = data);

  }

  qty : number = 1;
  product! : Product;

  increment(){
    this.qty++;
  }
  decrement(){
    if(this.qty >1){
      this.qty--;
    }
  }

  addToCard(){
    const cardItem: CardItem = {'product':this.product,'qty':this.qty};
    this.cardService.save(cardItem);
    this.router.navigate(['/products']);
  }

}
