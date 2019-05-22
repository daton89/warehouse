import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../../cart.service';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from 'app/articles/article.model';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import _ from 'lodash';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  articles: Article[];
  subscription: Subscription

  // debouncedSearchByCode: Function;

  constructor(
    private articleService: ArticleService,
    public cartService: CartService,
    public dataStorageService: DataStorageService,
    public router: Router,
    public route: ActivatedRoute
  ) {

    // this.debouncedSearchByCode = _.debounce((code: string) => {

    //   this.articles = this.articleService.getByCode(code)

    // }, 500)

  }

  ngOnInit() {
    this.subscription = this.articleService.articlesChanged
      .subscribe(
        (articles: Article[]) => {
          this.articles = articles
        }
      )

    this.dataStorageService.fetchArticles()
  }

  onNewArticle() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // addToCart(product) {

  //   thdataStorage.add(product)
  //     .subscribe(cart => {

  //       if (this.router.url === '/cart' && cart.products.length === 1) {

  //         window.location.reload()

  //       } else {

  //         this.router.navigateByUrl('/cart')

  //       }

  //     })
  // }

  // searchByCode(code) {

  //   if (!code) {
  //     this.articles = this.articleService.fetch()
  //     return
  //   }

  //   this.debouncedSearchByCode(code)

  // }

  // searchByName(name) {

  //   if (!name) {
  //     this.articles = this.articleService.fetch()
  //     return
  //   }

  //   this.articles = this.articleService.getByName(name)

  // }

  // removeArticle(article: Article) {

  //   if (confirm('Sei sicuro di voler eliminare questo articolo?')) {
  //     this.articles = this.articleService.remove(article);
  //   }

  // }

}
