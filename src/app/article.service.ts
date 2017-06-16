import { Article } from './article';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';



@Injectable()
export class ArticleService {

  baseUri = 'http://localhost:9999/api/articles'

  collection: Article[]

  constructor(
    private http: Http
  ) {}

  fetch(): Observable<Article[]> {

    return this.http.get(this.baseUri)
      .map(articles => this.collection = articles.json() as Article[])

    // .toPromise()
    // .then(response => response.json().data as Article[])
    // .catch(err => Promise.reject(err.message || err));
  }

  getById(id): Observable<Article[]> {
    return this.http.get(this.baseUri + '/' + id)
      .map(articles => articles.json() as Article[])
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
      .map(res => {

        let article = res.json() as Article

        this.collection.push(article)

        return article // or this.collection as Article[]

      })

  }

  update(article): Observable<Article>{
    return this.http.put(this.baseUri + '/' + article._id, article)
      .map(res => res.json() as Article)
  }

}
