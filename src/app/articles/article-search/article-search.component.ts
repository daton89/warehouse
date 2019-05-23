import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {

  constructor(
    private dataStorageService: DataStorageService
  ) { }

  ngOnInit() { }

  onSearchByName(name: HTMLInputElement) {
    this.dataStorageService.fetchArticlesByName(name.value)
  }

  onSearchByCode(code: HTMLInputElement) {
    this.dataStorageService.fetchArticlesByCode(code.value)
  }

}
