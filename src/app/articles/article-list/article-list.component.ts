import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { Component, OnInit, OnDestroy } from '@angular/core'
import { Subscription } from 'rxjs'

import { ArticleEvent } from './../article.service'
import { ArticleService } from '../article.service'
import { Article } from 'app/articles/article.model'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  subscription: Subscription
  articles: Article[]
  pageSize = 5
  page = 1
  collectionSize = 0

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.articleService.articlesChanged.subscribe((event: ArticleEvent) => {
      this.articles = event.paginate.docs
      this.collectionSize = event.paginate.total
    })

    this.articleService.fetch({
      page: this.page,
      pageSize: this.pageSize,
    })
  }

  onNewArticle() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  onPageChange(page: number) {
    this.articleService.fetch({
      page,
      pageSize: this.pageSize,
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
