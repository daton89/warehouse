import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ArticleService } from '../article.service';
import { Article } from 'app/articles/article.model';
import { DataStorageService } from 'app/shared/data-storage.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})

export class AddArticleComponent implements OnInit {

  id: string;
  editMode = false;
  articleForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private dataStorageService: DataStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.dataStorageService.updateArticle({
        _id: this.id,
        ...this.articleForm.value
      })
        .subscribe(
          () => { this.onCancel(); }
        );
    } else {
      this.dataStorageService.createArticle(this.articleForm.value)
        .subscribe(
          () => { this.onCancel(); }
        );
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddTag() {
    (<FormArray>this.articleForm.get('tags')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteTag(index: number) {
    (<FormArray>this.articleForm.get('tags')).removeAt(index);
  }

  private initForm() {
    let articleName = '';
    let articleImagePath = '';
    let articleDescription = '';
    let articleQuantity = 0;
    let articleCode = '';
    let articlePrice = 0;
    const articleTags = new FormArray([]);

    if (this.editMode) {
      const article: Article = this.articleService.getArticle(this.id);

      articleName = article.name;
      articleImagePath = article.image;
      articleDescription = article.description;
      articleQuantity = article.qty;
      articleCode = article.code;
      articlePrice = article.price;
      if (article['tags']) {
        for (const tag of article.tags) {
          articleTags.push(
            new FormGroup({
              'name': new FormControl(tag.name, Validators.required)
            })
          );
        }
      }
    }

    this.articleForm = new FormGroup({
      'name': new FormControl(articleName, Validators.required),
      'description': new FormControl(articleDescription, Validators.required),
      'image': new FormControl(articleImagePath, Validators.required),
      'qty': new FormControl(articleQuantity, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
      'code': new FormControl(articleCode, Validators.required),
      'price': new FormControl(articlePrice, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ]),
      'tags': articleTags
    });
  }

}
