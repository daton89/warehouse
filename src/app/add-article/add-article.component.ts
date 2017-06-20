import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ArticleService } from '../article.service';
import { Article } from "app/article";


@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  public article: Article

  // @Output() onSave = new EventEmitter<Article>()

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.article = new Article()
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if (params.id && params.id !== 'new') {
        this.articleService.getById(params.id)
          .subscribe(
          article => {
            this.article = article
          },
          err => console.error(err)
          )
      } else {
        this.article = new Article()
      }

    })

  }

  save($event, article) {
    console.log('article =>', article);
    let obs;
    if (article._id) {
      obs = this.articleService.update(article)
    } else {
      obs = this.articleService.create(article)
    }
    obs.subscribe(
      (res) => {
        this.router.navigateByUrl('/dashboard')
      },
      (err) => console.error(err)
    )

  }

}
