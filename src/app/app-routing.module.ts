import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { CardComponent } from './components/card/card.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', redirectTo:"products" , pathMatch:"full" },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ShowProductComponent },
  { path: 'card', component: CardComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'about', component: AboutComponent },
  { path : '**' , component:NotFoundPageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
