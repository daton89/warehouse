import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ArticleEvent } from './../article.service';
import { ArticleService } from '../article.service';
import { Article } from 'app/articles/article.model';
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  subscription: Subscription
  articles: Article[]
  pageSize: number = 5
  page: number = 1
  collectionSize: number = 0

  constructor(
    private articleService: ArticleService,
    private dataStorageService: DataStorageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.articleService.articlesChanged
      .subscribe(
        (event: ArticleEvent) => {
          console.log(event)
          this.articles = event.paginate.docs
          this.collectionSize = event.paginate.total
        }
      )

    this.dataStorageService.fetchArticles({
      page: this.page,
      pageSize: this.pageSize
    })
  }

  onNewArticle() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onPageChange(page: number) {
    this.dataStorageService.fetchArticles({
      page,
      pageSize: this.pageSize
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
