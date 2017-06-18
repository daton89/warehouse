import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from './../cart.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { ArticleService } from "app/article.service";
import { Article } from "app/article";
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
import _ from 'lodash';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles: Observable<Article[]>

  constructor(
    private articleService: ArticleService,
    public cartService: CartService,
    public router: Router,
    public route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.articles = this.articleService.fetch()

    this.articles.subscribe(
      change => console.log('change =>', change)
    )

  }

  addToCart(article){
    this.cartService.add(article)
      .subscribe(
        cart => {

          if (this.router.url === '/cart') {

            window.location.reload()

          } else {

            this.router.navigateByUrl('/cart')

          }

        }
      )
  }

  searchByCode(code) {

    if (!code) {
      this.articles = this.articleService.fetch()
      return
    }

    this.articles = this.articleService.getByCode(code)

    // .subscribe((res) => {
    //   // this.articles = []
    //   // if (res.json()) this.articles = [res.json()]
    // })
  }

  searchByName(name) {

    if (!name) {
      this.articles = this.articleService.fetch()
      return
    }

    this.articles = this.articleService.getByName(name)

    // .subscribe((res) => {
    //   // this.articles = res.json()
    // })
  }

  removeArticle(article) {

    if (confirm('Sei sicuro di voler eliminare questo articolo?'))
      this.articles = this.articleService.remove(article)

  }

}
