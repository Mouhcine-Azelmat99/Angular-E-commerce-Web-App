import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  constructor(private productService : ProductService,private route:ActivatedRoute){}

  products : Product[] = [];

  sortDesc : boolean = false;

  getByCat($event:any) {
    if($event == 'all'){
      this.productService.getAll().subscribe(data => this.products = data);
    }else{
      this.productService.getProductsByCategory($event).subscribe(data => this.products = data);
    }
  }
  ngOnInit(): void {
    console.log("Loading ng OnInit")
    if(this.route.snapshot.paramMap.get('category') == null){
      this.productService.getAll().subscribe(data => this.products = data);
    }else{
      const category : string = this.route.snapshot.paramMap.get('category')!;
      this.productService.getProductsByCategory(category).subscribe(data => this.products = data);
    }
  }

  sort(){
    if(this.sortDesc){
      this.productService.sortDesc().subscribe(data => this.products = data);
    }else{
      this.productService.getAll().subscribe(data => this.products = data);
    }
  }

}
