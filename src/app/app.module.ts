import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';

import { CartService } from './cart/cart.service';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleService } from 'app/articles/article.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticleImportComponent } from './articles/article-import/article-import.component';
import { ArticleItemComponent } from './articles/article-list/article-item/article-item.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleSearchComponent } from './articles/article-search/article-search.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { DataStorageService } from './shared/data-storage.service';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CartListComponent } from './cart/cart-list/cart-list.component';
import { CartItemComponent } from './cart/cart-list/cart-item/cart-item.component';
import { CartDetailComponent } from './cart/cart-detail/cart-detail.component';
import { ImagePreviewDirective } from './shared/image-preview.directive';

@NgModule({
  declarations: [
    AppComponent,
    ArticleItemComponent,
    ArticleListComponent,
    AddArticleComponent,
    CartComponent,
    DashboardComponent,
    ArticleImportComponent,
    ArticlesComponent,
    ArticleSearchComponent,
    ArticleDetailComponent,
    HeaderComponent,
    DropdownDirective,
    CartListComponent,
    CartItemComponent,
    CartDetailComponent,
    ImagePreviewDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FileUploadModule
  ],
  providers: [ArticleService, CartService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
