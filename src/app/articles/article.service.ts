import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Subject } from 'rxjs'

import { environment } from '../../environments/environment'
import { Article } from './article.model'

export interface ArticlePaginate {
  docs: Article[]
  total: number
  limit: number
  page: number
  pages: number
}

export interface ArticleEvent {
  type: string
  article?: Article
  paginate?: ArticlePaginate
}

@Injectable()
export class ArticleService {
  private articleBaseUri = `${environment.apiUrl}/api/articles`
  eventTypes = { CREATED: 'created', UPDATED: 'updated', LOADED: 'loaded', REMOVED: 'removed' }
  articlesChanged = new Subject<ArticleEvent>()
  private articlePaginate: ArticlePaginate

  constructor(private http: HttpClient) {}

  // Service methods
  dispatch(action: string, payload: any, meta: any) {
    this[action](payload, meta)
  }

  commit(method: string, payload: any) {
    this[method](payload)
  }

  // actions
  create(payload: Article) {
    return this.http
      .post(this.articleBaseUri, payload)
      .toPromise()
      .then((article: Article) => {
        this.addArticle(article)
      })
  }

  update(payload: Article) {
    return this.http
      .put(`${this.articleBaseUri}/${payload._id}`, payload)
      .toPromise()
      .then((article: Article) => {
        this.updateArticle(article)
      })
  }

  fetch(options: { page: number; pageSize: number }) {
    const params = new HttpParams()
      .set('page', `${options.page}`)
      .set('pageSize', `${options.pageSize}`)

    return this.http
      .get(this.articleBaseUri, { params })
      .toPromise()
      .then((articlePaginate: ArticlePaginate) => {
        this.setArticles(articlePaginate)
      })
  }

  fetchById(id: string) {
    return this.http.get(`${this.articleBaseUri}/${id}`).toPromise()
  }

  fetchByCode(code: string, options: { page: number; pageSize: number }) {
    const params = new HttpParams()
      .set('page', `${options.page}`)
      .set('pageSize', `${options.pageSize}`)

    return this.http
      .get(this.articleBaseUri + '/code/' + code, { params })
      .toPromise()
      .then((articlePaginate: ArticlePaginate) => {
        this.setArticles(articlePaginate)
      })
  }

  fetchByName(name: string, options: { page: number; pageSize: number }) {
    const params = new HttpParams()
      .set('page', `${options.page}`)
      .set('pageSize', `${options.pageSize}`)

    return this.http
      .get(this.articleBaseUri + '/name/' + name, { params })
      .toPromise()
      .then((articlePaginate: ArticlePaginate) => {
        this.setArticles(articlePaginate)
      })
  }

  // Methods for the Articles' collection
  setArticles(articlePaginate: ArticlePaginate) {
    this.articlePaginate = articlePaginate
    this.articlesChanged.next({
      type: this.eventTypes.LOADED,
      paginate: { ...articlePaginate },
    })
  }

  getArticles() {
    if (!this.articlePaginate?.docs.length) return []
    return [...this.articlePaginate.docs]
  }

  // CRUD Methods for the Article's model
  addArticle(article: Article) {
    this.articlePaginate.docs.push(article)
    this.articlesChanged.next({
      type: this.eventTypes.CREATED,
      article,
      paginate: { ...this.articlePaginate },
    })
  }

  getArticle(id: string) {
    return this.articlePaginate.docs.find(({ _id }) => _id === id)
  }

  updateArticle(updatedArticle: Article) {
    const index = this.articlePaginate.docs.findIndex(({ _id }) => _id === updatedArticle._id)
    this.articlePaginate.docs.splice(index, 1, updatedArticle)
    this.articlesChanged.next({
      type: this.eventTypes.UPDATED,
      article: updatedArticle,
      paginate: { ...this.articlePaginate },
    })
  }

  deleteArticle(article: Article) {
    const index = this.articlePaginate.docs.findIndex(({ _id }) => _id === article._id)
    this.articlePaginate.docs.splice(index, 1)
    this.articlesChanged.next({
      type: this.eventTypes.REMOVED,
      article,
      paginate: { ...this.articlePaginate },
    })
  }
}
