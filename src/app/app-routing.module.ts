import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'merchant/:merchant-name', component: ListPageComponent},
  {path: 'category/:category-name', component: ListPageComponent},
  {path: 'store/:store-name', component: ListPageComponent},
  {path: 'product/:product-name', component: ProductPageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
