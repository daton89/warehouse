import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Article } from '../article.model';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'app/shared/data-storage.service';
import { Product } from 'app/shared/product.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  subscription: Subscription
  article: Article;
  id: string;

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
          this.id = params['id'];

         this.dataStorageService.getArticleById(this.id)
          .subscribe(
            (article: Article) => {
              this.article = article
            }
          );
        }
      );
  }

  onAddToShoppingList() {
    const product = new Product(this.article, 1)
    this.dataStorageService.addToShoppingList(product);
  }

  onEditArticle() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteArticle() {
    this.articleService.deleteArticle(this.id);
    this.router.navigate(['/articles']);
  }

}
