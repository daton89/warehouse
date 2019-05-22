import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../../article.service';
import { Article } from 'app/articles/article.model';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'app/cart/cart.service';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input() article: Article;
  @Input() id: String;

  constructor(
    private articleService: ArticleService,
    public router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit() { }

  // addToCart(product) {

  //   this.cartService.add(product)
  //     .subscribe(cart => {

  //       this.router.navigateByUrl('/cart')

  //     })
  // }

  // removeArticle(article: Article) {
  //   if (confirm('Remove article?')) {
  //     this.articleService.deleteArticle(article._id)
  //   }
  // }

}
