import { Article } from './article.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import _ from 'lodash'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ArticleService {
  articlesChanged = new Subject<Article[]>()

  private articles: Article[] = []

  constructor( ) { }

  // Methods for the Articles' collection
  setArticles(articles: Article[]) {
    this.articles = articles
    this.articlesChanged.next([...this.articles])
  }

  getArticles() {
    return [...this.articles]
  }

  // CRUD Methods for the Article's model
  addArticle(article: Article) {
    this.articles.push(article)
    this.articlesChanged.next([...this.articles])
  }

  getArticle(id: string) {
    const index = this.articles.findIndex(({_id}) => _id === id)
    return this.articles[index];
  }

  getArticleById(id: string) {
    return this.articles.find(({ _id }) => id === _id);
  }

  updateArticle(changedArticle: Article) {
    const index = this.articles.findIndex((({_id}) => _id === changedArticle._id))
    this.articles.splice(index, 1, changedArticle);
    this.articlesChanged.next([...this.articles]);
  }

  deleteArticle(id: string) {
    const index = this.articles.findIndex((({_id}) => _id === id))
    this.articles.splice(index, 1)
    this.articlesChanged.next([...this.articles])
  }

  // fetch(): Observable<Article[]> {
  //   return this.http.get(this.baseUri)
  //     .map(articles => this.collection = articles.json() as Article[])
  //   // .toPromise()
  //   // .then(response => response.json().data as Article[])
  //   // .catch(err => Promise.reject(err.message || err));
  // }

  // getById(id: string): Observable<Article> {
  //   return this.http.get(this.baseUri + '/' + id)
  //     .map(articles => articles.json() as Article)
  // }

  // getByCode(code: string): Observable<Article[]> {
  //   return this.http.get(this.baseUri + '/code/' + code)
  //     .map(articles => articles.json() as Article[])
  // }

  // getByName(name: string): Observable<Article[]> {
  //   return this.http.get(this.baseUri + '/name/' + name)
  //     .map(articles => articles.json() as Article[])
  // }

  // create(article: Article) {
  //   return this.http.post(this.baseUri, article)
  //     .map(res => res.json() as Article)
  //     .do(article => this.collection.push(article))
  // }

  // update(article: Article): Observable<Article> {
  //   return this.http.put(this.baseUri + '/' + article._id, article)
  //     .map(res => res.json() as Article)
  //     .do(article => this.collection.splice(this.collection.findIndex(a => a._id === article._id), 1, article))
  // }

  // remove(article: Article): Observable<Article[]> {
  //   return this.http.delete(this.baseUri + '/' + article._id)
  //     .map(articles => articles.json() as Article[])
  // }

}
