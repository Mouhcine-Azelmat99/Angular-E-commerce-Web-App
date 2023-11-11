import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {CategoriesService} from '../../services/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoriesService){}

  @Output() category = new EventEmitter<string>();

  changeCategory(cat : string){
    this.category.emit(cat);
  }
  categories!: any[];
  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

}
