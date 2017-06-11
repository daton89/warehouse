import { Component } from '@angular/core';
import PouchDB from 'pouchdb';
import { Http } from '@angular/http';
import 'rxjs';

const db = new PouchDB('articles');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  http
  articles = [];

  currentPage = 'dashboard';

  pages = ['dashboard', 'manage-articles', 'create-cart']

  code = '';
  name = '';
  qty = '';

  constructor(http: Http) {

    http.get('http://localhost:9000/api/articles')
      .subscribe(
      (res) =>  console.log(res),
      (err) => console.error('errore =>', err),
      () => console.log('finito')
      );

    // var that = this;
    // db.allDocs({ include_docs: true, descending: true }, function (err, doc) {
    //   console.log(doc.rows);
    //   doc.rows.forEach(d => {
    //     that.articles.unshift(d.doc);
    //   });
    // });

  }

  goToPage(page) {
    this.currentPage = page;
  }

  add() {

    let article = {
      code: this.code,
      name: this.name,
      qty: this.qty
    };

    this.articles.unshift(article);

    this.http.post('http://localhost:9000/api/articles', article)
      .subscribe(
      (res) =>  console.log(res),
      (err) => console.error('errore =>', err),
      () => console.log('finito')
      );


    this.code = '';
    this.name = '';
    this.qty = '';

  }

  edit(article) {

    this.code = article.code;
    this.name = article.name;
    this.qty = article.qty;

  }
}
