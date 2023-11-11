import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
})
export class ProductsItemComponent {

  constructor(private route : Router){}

  @Input()
  product!: Product;


  showProduct(){
    this.route.navigate(['products/'+this.product.id]);
  }
}
