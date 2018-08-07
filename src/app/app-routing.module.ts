import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'merchant/:merchant-name', component: ListPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
