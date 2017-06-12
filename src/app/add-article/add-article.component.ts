import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article = {}

  constructor(private articleService: ArticleService) {
    this.articleService = articleService
   }

  ngOnInit() {
  }

  add($event) {

    this.articleService.create(this.article)
      .subscribe(
      (res) => console.log(res),
      (err) => console.error('errore =>', err),
      () => console.log('finito')
      );

  }

}
