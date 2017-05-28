import { Component } from '@angular/core';
import jsonfile from 'jsonfile';
import PouchDB from 'pouchdb';

const db = new PouchDB('articles');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'vapers app!';

  articles = [];

  showCreateArticle = false;
  showCreateCart = false;

  code = '';
  name = '';
  qty = '';

  constructor() {

    var that = this;

    db.allDocs({ include_docs: true, descending: true }, function (err, doc) {

      console.log(doc.rows);

      doc.rows.forEach(d => {
        that.articles.unshift(d.doc);
      });

    });

  }

  add() {

    // const id = parseInt((Math.random() * 10000).toString(), 10);
    const _id = Date.now().toString();

    const article = {
      _id,
      code: this.code,
      name: this.name,
      qty: this.qty
    };

    this.articles.unshift(article);

    db.put(article, function callback(err, result) {
      if (err) return console.error(err);

      console.log('Successfully posted a todo!');

    });

    this.code = '';
    this.name = '';
    this.qty = '';

    // jsonfile.writeFile('articles.json', this.articles, function (err) {
    //   if (err) console.error(err);
    // })

  }

  edit(article) {

    this.code = article.code;
    this.name = article.name;
    this.qty = article.qty;

  }
}
