import { environment } from './../environments/environment';
import { Article } from './article';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Subject } from "rxjs/Subject";
import _ from 'lodash'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ArticleService {

  baseUri = `${environment.apiUrl}/api/articles`

  collection: Article[]

  constructor(
    private http: Http
  ) { }

  fetch(): Observable<Article[]> {

    return this.http.get(this.baseUri)
      .map(articles => this.collection = articles.json() as Article[])

    // .toPromise()
    // .then(response => response.json().data as Article[])
    // .catch(err => Promise.reject(err.message || err));
  }

  getById(id): Observable<Article> {
    return this.http.get(this.baseUri + '/' + id)
      .map(articles => articles.json() as Article)
  }

  getByCode(code): Observable<Article[]> {
    return this.http.get(this.baseUri + '/code/' + code)
      .map(articles => articles.json() as Article[])
  }

  getByName(name): Observable<Article[]> {
    return this.http.get(this.baseUri + '/name/' + name)
      .map(articles => articles.json() as Article[])
  }

  create(article) {

    return this.http.post(this.baseUri, article)
      .map(res => res.json() as Article)
      .do(article => this.collection.push(article))
  }

  update(article): Observable<Article> {
    return this.http.put(this.baseUri + '/' + article._id, article)
      .map(res => res.json() as Article)
      .do(article => this.collection.splice(this.collection.findIndex(a => a._id === article._id), 1, article))
  }

  remove(article): Observable<Article[]> {
    return this.http.delete(this.baseUri + '/' + article._id)
      .map(articles => articles.json() as Article[])
  }

}
