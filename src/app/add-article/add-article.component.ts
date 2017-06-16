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

  public article: Article

  // @Output() onSave = new EventEmitter<Article>()

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
    this.article = new Article()
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      if (params.id && params.id !== 'new') {
        this.articleService.getById(params.id)
        // .subscribe(
        // res => { if (res.json()){
        //   this.article = res.json()
        // }},
        // err => console.error(err)
        // )
      } else {
        this.article = new Article()
      }

    })

  }

  save($event, article) {
    let obs;
    if (article._id) {
      obs = this.articleService.update(article)
    } else {
      obs = this.articleService.create(article)
    }
    obs.subscribe(
      (res) => {
        // this.onSave.emit(res.json())
        console.log('res =>', res);
      },
      (err) => console.error(err)
    )

  }

}
