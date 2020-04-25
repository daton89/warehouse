import { ArticleEvent } from 'app/articles/article.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStorageService } from 'app/shared/data-storage.service';
import { ArticleService, ArticlePaginate } from './../article.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit, OnDestroy {
  subscription: Subscription
  articlePaginate: ArticlePaginate

  constructor(
    private dataStorageService: DataStorageService,
    private articlesService: ArticleService
  ) { }

  ngOnInit() {
    this.subscription = this.articlesService.articlesChanged
      .subscribe(
        (event: ArticleEvent) => this.articlePaginate = event.paginate
      )
  }

  onSearchByName(name: HTMLInputElement) {
    this.articlesService.fetchByName(
      name.value,
      {
        page: this.articlePaginate.page, pageSize: this.articlePaginate.pages
      }
    )
  }

  onSearchByCode(code: HTMLInputElement) {
    this.articlesService.fetchByCode(
      code.value,
      {
        page: this.articlePaginate.page, pageSize: this.articlePaginate.pages
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
