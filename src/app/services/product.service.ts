import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  private url : string = "https://fakestoreapi.com/products";

  getAll() : Observable<any> {
    return this.http.get(this.url);
  }

  getById(id : string) : Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  sortDesc() : Observable<any> {
    return this.http.get(`${this.url}?sort=desc`);
  }

  getProductsByCategory(category : string) : Observable<any> {
    return this.http.get(`${this.url}/category/${category}`);
  }

}
