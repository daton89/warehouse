import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CartService } from 'app/cart/cart.service';
import { ArticleService, ArticleEvent } from 'app/articles/article.service';
import { Cart } from 'app/cart/cart.model'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  articleSubscription: Subscription
  cartSubscription: Subscription
  articlesCount: number
  cartProductsCount: number

  constructor(
    private articleService: ArticleService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.articleSubscription = this.articleService.articlesChanged
      .subscribe(
        (event: ArticleEvent) => this.articlesCount = event.paginate.total
      )
    this.cartSubscription = this.cartService.cartChanged
      .subscribe(
        (cart: Cart) => this.cartProductsCount = cart.products.length
      )
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe()
    this.cartSubscription.unsubscribe()
  }

}
