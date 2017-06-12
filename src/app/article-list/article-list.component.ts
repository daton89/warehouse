import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/article.service";

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles = []

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articleService.fetch()
      .subscribe(
      res => this.articles = res.json()
      )

  }

}
