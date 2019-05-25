
import { Injectable } from '@angular/core';
// TODO: http is deprecated, migrate to common/http
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { CartService } from 'app/cart/cart.service';
import { Product } from 'app/shared/product.model';
import { Cart } from 'app/cart/cart.model';
import { environment } from '../../environments/environment';
import { ArticleService, ArticlePaginate } from '../articles/article.service';
import { Article } from '../articles/article.model';

@Injectable()
export class DataStorageService {
  private articleBaseUri = `${environment.apiUrl}/api/articles`
  private cartBaseUri = `${environment.apiUrl}/api/carts`

  constructor(
    private http: Http,
    private articleService: ArticleService,
    private cartService: CartService
  ) { }

  createArticle(article: Article): Observable<Article> {
    return this.http.post(this.articleBaseUri, article)
      .pipe(
        map((response: Response) => response.json()),
        tap((article: Article) => this.articleService.addArticle(article))
      )
  }

  fetchArticles(options: { page: number, pageSize: number }): Subscription {
    return this.http.get(this.articleBaseUri, { params: options })
      .pipe(map((response: Response) => response.json()))
      .subscribe(
        (articlePaginate: ArticlePaginate) => {
          this.articleService.setArticles(articlePaginate);
        }
      );
  }

  fetchArticlesByCode(code: string, options: { page: number, pageSize: number }): Subscription {
    return this.http.get(this.articleBaseUri + '/code/' + code, { params: options })
      .pipe(map((response: Response) => response.json()))
      .subscribe(
        (articlePaginate: ArticlePaginate) => this.articleService.setArticles(articlePaginate)
      )
  }

  fetchArticlesByName(name: string, options: { page: number, pageSize: number }): Subscription {
    return this.http.get(this.articleBaseUri + '/name/' + name, { params: options })
      .pipe(map((response: Response) => response.json()))
      .subscribe(
        (articlePaginate: ArticlePaginate) => this.articleService.setArticles(articlePaginate)
      )
  }

  getArticleById(id: string): Observable<Article> {
    return this.http.get(`${this.articleBaseUri}/${id}`)
      .pipe(map((response: Response) => response.json()))
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put(`${this.articleBaseUri}/${article._id}`, article)
      .pipe(
        map((response: Response) => response.json()),
        tap((article: Article) => this.articleService.updateArticle(article))
      )
  }

  fetchCart(): Subscription {
    return this.http.get(this.cartBaseUri)
      .pipe(map((res: Response) => res.json()))
      .subscribe((cart: Cart) => this.cartService.setCart(cart))
  }

  addToShoppingList(product: Product): Observable<Cart> {
    const cart = this.cartService.getCart()

    const productAlreadyPresent = cart.products
      .find((p: Product) => p.article._id === product.article._id)

    if (productAlreadyPresent) {
      return this.updateAmount(cart._id, {
        ...productAlreadyPresent,
        qty: productAlreadyPresent.qty + product.qty
      })
    }

    return this.http.put(`${this.cartBaseUri}/push/${cart._id}`, product)
      .pipe(
        map((res: Response) => res.json()),
        tap(
          (cart: Cart) => this.cartService.setCart(cart)
        )
      )
  }

  updateAmount(cartId: string, product: Product): Observable<Cart> {
    return this.http.put(`${this.cartBaseUri}/set-quantity/${cartId}`, product)
      .pipe(
        map((res: Response) => res.json()),
        tap(
          (cart: Cart) => this.cartService.setCart(cart)
        )
      )
  }

  removeProduct(cartId: string, product: Product): Subscription {
    return this.http.put(`${this.cartBaseUri}/pull/${cartId}`, product)
      .pipe(
        map((res: Response) => res.json())
      )
      .subscribe(
        (cart: Cart) => this.cartService.setCart(cart)
      )
  }

  checkout(cartId: string): Observable<Cart> {
    return this.http.get(`${this.cartBaseUri}/checkout/${cartId}`)
      .pipe(
        map((res: Response) => res.json()),
        tap(
          (cart: Cart) => this.cartService.setCart(cart)
        )
      )
  }

}
