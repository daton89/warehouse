import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleImportComponent } from './articles/article-import/article-import.component';
import { CartComponent } from './cart/cart.component';
import { ArticleSearchComponent } from './articles/article-search/article-search.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'articles', component: ArticlesComponent, children: [
    { path: '', component: ArticleSearchComponent},
    { path: 'import', component: ArticleImportComponent },
    { path: 'new', component: AddArticleComponent },
    { path: ':id', component: ArticleDetailComponent },
    { path: ':id/edit', component: AddArticleComponent },
  ] },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
