import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { AddArticleComponent }  from './add-article/add-article.component';
import { CartComponent }        from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',        component: DashboardComponent, pathMatch: 'full' },
  { path: 'articles/:id',     component: AddArticleComponent, pathMatch: 'full' },
  { path: 'cart',             component: CartComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
