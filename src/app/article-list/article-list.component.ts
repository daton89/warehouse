import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/article.service";
import { Article } from "app/article";

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public articles: Article[]

  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articleService.fetch()
      .subscribe(
      res => this.articles = res.json()
      )

  }

  searchByCode(code) {
    this.articleService.getByCode(code)
      .subscribe((res) => {
        this.articles = []
        if (res.json()) this.articles = [res.json()]
      })
  }

  searchByName(name) {
    this.articleService.getByName(name)
      .subscribe((res) => {
        this.articles = res.json()
      })
  }

}
