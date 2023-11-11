import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private url = "https://fakestoreapi.com/products/categories";

  constructor(private http : HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.url);
  }
}
