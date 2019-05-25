import { Article } from './article.model';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { ArticleService, ArticleEvent } from 'app/articles/article.service';
import { debounceTime, tap } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  subscription: Subscription
  successMessage: string = 'loading articles... please wait...'
  articleCount: number
  firstLoad: boolean = true

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.subscription = this.articleService.articlesChanged
      .pipe(
        tap((event: ArticleEvent) => {
          this.articleCount = event.paginate.total
          this.reduceArticleEvent(event)
        }),
        debounceTime(3000)
      )
      .subscribe(() => {
        this.successMessage = null
      })
  }

  reduceArticleEvent(event: ArticleEvent) {
    const { LOADED, CREATED, UPDATED, REMOVED } = this.articleService.eventTypes
    switch (event.type) {
      case LOADED:
          if (this.firstLoad) {
            this.successMessage = `${this.articleCount} articles ${event.type}`
            this.firstLoad = false
          }
        break;

      case CREATED:
        this.successMessage = `New article ${event.type}, ${event.article.name}`
        break;

      case UPDATED:
        this.successMessage = `${event.article.name} ${event.type}`
        break;

      case REMOVED:
        this.successMessage = `${event.article.name} ${event.type}`
        break;

      default:
        break;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
