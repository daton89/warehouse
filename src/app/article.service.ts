import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Article } from "app/article";

@Injectable()
export class ArticleService {

  baseUri = 'http://localhost:9000/api/articles'

  constructor(
    private http: Http
  ) {

  }

  fetch(){
    return this.http.get(this.baseUri)
  }

  create(article) {

    var { code, name, category, type, qty, company, price, nicotine, size } = article;
    
    let newArticle = new Article(
      code, name, category, type, qty, company, price, nicotine, size
    )

    return this.http.post(this.baseUri, newArticle)

  }

}
