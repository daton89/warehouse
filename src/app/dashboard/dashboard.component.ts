import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articles/article.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() { }

}
