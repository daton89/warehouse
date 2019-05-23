
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { ArticleService } from '../articles/article.service';
import { Article } from '../articles/article.model';
import { CartService } from 'app/cart/cart.service';
import { Product } from 'app/shared/product.model';
import { Cart } from 'app/cart/cart';

@Injectable()
export class DataStorageService {
  private articleBaseUri = `${environment.apiUrl}/api/articles`
  private cartBaseUri = `${environment.apiUrl}/api/carts`

  constructor(
    private http: Http,
    private articleService: ArticleService,
    private cartService: CartService
  ) {}

  createArticle(article: Article) {
    return this.http.post(this.articleBaseUri, article)
      .map(
        (response: Response) => response.json()
      )
      .do(
        (article: Article) => this.articleService.addArticle(article)
      )
  }

  fetchArticles() {
    this.http.get(this.articleBaseUri)
      .map(
        (response: Response) => response.json()
      )
      .subscribe(
        (articles: Article[]) => {
          this.articleService.setArticles(articles);
        }
      );
  }

  fetchArticlesByCode(code: string) {
    return this.http.get(this.articleBaseUri + '/code/' + code)
      .map((response: Response) => response.json())
      .subscribe(
        (articles: Article[]) => this.articleService.setArticles(articles)
      )
  }

  fetchArticlesByName(name: string) {
    return this.http.get(this.articleBaseUri + '/name/' + name)
      .map((response: Response) => response.json())
      .subscribe(
        (articles: Article[]) => this.articleService.setArticles(articles)
      )
  }

  getArticleById(id: string) {
    return this.http.get(`${this.articleBaseUri}/${id}`)
    .map(
      (response: Response) => response.json()
    )
  }

  updateArticle(article: Article) {
    return this.http.put(`${this.articleBaseUri}/${article._id}`, article)
      .map(
        (response: Response) => response.json()
      )
      .do(
        (article: Article) => this.articleService.updateArticle(article)
      )
  }

  fetchCart() {
    return this.http.get(this.cartBaseUri)
      .map(res => res.json())
      .subscribe((cart: Cart) => this.cartService.setCart(cart))
  }

  addToShoppingList(product: Product) {
    const cart = this.cartService.getCart()
    console.log('cart =>', JSON.stringify(cart,null, 4));

    if (cart._id) {
      return this.http.put(`${this.cartBaseUri}/push/${cart._id}`, product)
        .map(res => res.json())
        .subscribe(
          (cart: Cart) => this.cartService.setCart(cart)
        )
        // .do((cart: Cart) =>
        //   _.differenceBy(cart.products, this.products, '_id')
        //     .forEach(p => this.products.push(p))
        // )

    } else {
      return this.http.post(this.cartBaseUri, product)
        .map(res => res.json())
        .subscribe(
          (cart: Cart) => this.cartService.setCart(cart)
        )
        // .do(cart => this.cart = cart)
        // .do(cart => {
        //   this.products.push(cart.products[0])
        // })
    }
  }

}
