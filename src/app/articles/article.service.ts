import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Article } from './article.model';

export interface ArticlePaginate {
  docs: Article[],
  total: number,
  limit: number,
  page: number,
  pages: number
}

export interface ArticleEvent {
  type: string,
  article?: Article,
  paginate?: ArticlePaginate
}

@Injectable()
export class ArticleService {
  eventTypes = { CREATED: 'created', UPDATED: 'updated', LOADED: 'loaded', REMOVED: 'removed' }
  articlesChanged = new Subject<ArticleEvent>()
  private articlePaginate: ArticlePaginate

  constructor() { }

  // Methods for the Articles' collection
  setArticles(articlePaginate: ArticlePaginate) {
    this.articlePaginate = articlePaginate
    this.articlesChanged.next({
      type: this.eventTypes.LOADED,
      paginate: { ...articlePaginate }
    })
  }

  getArticles() {
    return [...this.articlePaginate.docs]
  }

  // CRUD Methods for the Article's model
  addArticle(article: Article) {
    this.articlePaginate.docs.push(article)
    this.articlesChanged.next({
      type: this.eventTypes.CREATED,
      article,
      paginate: {...this.articlePaginate}
    })
  }

  getArticle(id: string) {
    return this.articlePaginate.docs.find(({ _id }) => _id === id)
  }

  updateArticle(updatedArticle: Article) {
    const index = this.articlePaginate.docs.findIndex((({ _id }) => _id === updatedArticle._id))
    this.articlePaginate.docs.splice(index, 1, updatedArticle);
    this.articlesChanged.next({
      type: this.eventTypes.UPDATED,
      article: updatedArticle,
      paginate: {...this.articlePaginate}
    });
  }

  deleteArticle(article: Article) {
    const index = this.articlePaginate.docs.findIndex((({ _id }) => _id === article._id))
    this.articlePaginate.docs.splice(index, 1)
    this.articlesChanged.next({
      type: this.eventTypes.REMOVED,
      article,
      paginate: {...this.articlePaginate}
    })
  }

}
