import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from "@angular/router";
import { Article } from "app/article";

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: Article

  @Output() onSave = new EventEmitter<Article>()

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if (params.id && params.id !== 'new') {
        this.articleService.getById(params.id)
          .subscribe(res => this.article = res.json())
      } else {
        this.article = new Article()
      }

    })

  }

  save($event, article) {

    if (article._id) {
      this.articleService.update(article)
        .subscribe(
        (res) => {
          this.onSave.emit(res.json())
          this.article = res.json()
        },
        (err) => console.error(err)
        )
    } else {
      this.articleService.create(article)
        .subscribe(
        (res) => {
          this.onSave.emit(res.json())
          this.article = res.json()
        },
        (err) => console.error(err)
        );
    }

  }

}
