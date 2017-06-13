import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Article } from "app/article";

@Injectable()
export class ArticleService {

  baseUri = 'http://localhost:9999/api/articles'

  constructor(
    private http: Http
  ) {

  }

  fetch() {
    return this.http.get(this.baseUri)
  }

  getById(id) {
    return this.http.get(this.baseUri + '/' + id)
  }

  getByCode(code) {
    return this.http.get(this.baseUri + '/code/' + code)
  }

  getByName(name) {
    return this.http.get(this.baseUri + '/name/' + name)
  }

  create(article) {

    // var { code, name, category, type, qty, company, price, nicotine, size } = article;

    // let newArticle = new Article(
    //   code, name, category, type, qty, company, price, nicotine, size
    // )

    return this.http.post(this.baseUri, article)

  }

  update(article) {
    return this.http.put(this.baseUri + '/' + article._id, article)
  }

}
