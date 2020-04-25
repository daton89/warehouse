import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { Subscription } from 'rxjs'

import { Article } from 'app/articles/article.model'
import { Product } from 'app/shared/product.model'
import { ArticleService } from '../article.service'
import { DataStorageService } from 'app/shared/data-storage.service'

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  subscription: Subscription
  article: Article
  id: string

  constructor(
    private articleService: ArticleService,
    private dataStorageService: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id']

          this.articleService.fetchById(this.id)
            .then(
              (article: Article) => {
                this.article = article
              }
            )
        }
      )
  }

  onAddToShoppingList(quantityInput: HTMLInputElement) {
    const product = new Product(this.article, +quantityInput.value)
    this.dataStorageService.addToShoppingList(product)
      .subscribe(
        () => { },
        () => alert('failed add to cart')
      )
  }

  onEditArticle() {
    this.router.navigate(['edit'], { relativeTo: this.route })
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onDeleteArticle(article: Article) {
    this.articleService.deleteArticle(article)
    this.router.navigate(['/articles'])
  }

}
