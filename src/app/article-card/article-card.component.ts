import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from './../article.service';
import { Article } from 'app/article';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from "app/cart.service";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() article: Article;

  constructor(
    private articleService: ArticleService,
    public cartService: CartService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {

  }

  addToCart(product) {

    this.cartService.add(product)
      .subscribe(cart => {

        this.router.navigateByUrl('/cart')

      })
  }

  removeArticle(article) {

    if (confirm('Sei sicuro di voler eliminare questo articolo?')) {
      this.articleService.remove(article).subscribe(
        res => {
          window.location.reload()
        }
      );
    }

  }

}
