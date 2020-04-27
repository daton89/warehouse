import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, Params } from '@angular/router'
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms'

import { ArticleService } from '../article.service'
import { Article } from 'app/articles/article.model'

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css'],
})
export class AddArticleComponent implements OnInit {
  id: string
  editMode = false
  articleForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router
  ) {}

  // get articleFormData() {
  //   return <FormArray>this.articleForm.get('Data')
  // }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.editMode = params['id'] != null
      this.initForm()
    })
  }

  onSubmit() {
    if (this.editMode) {
      this.articleService
        .update({
          _id: this.id,
          ...this.articleForm.value,
        })
        .then(() => {
          this.onCancel()
        })
    } else {
      this.articleService.create(this.articleForm.value).then(() => {
        this.onCancel()
      })
    }
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route })
  }

  onAddTag() {
    // tslint:disable-next-line:whitespace
    ;(<FormArray>this.articleForm.get('tags')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
      })
    )
  }

  onDeleteTag(index: number) {
    // tslint:disable-next-line:whitespace
    ;(<FormArray>this.articleForm.get('tags')).removeAt(index)
  }

  private initForm() {
    let articleName = ''
    let articleImagePath = ''
    let articleDescription = ''
    let articleQuantity = 0
    let articleCode = ''
    let articlePrice = 0
    const articleTags = new FormArray([])

    if (this.editMode) {
      const article: Article = this.articleService.getArticle(this.id)

      articleName = article.name
      articleImagePath = article.image
      articleDescription = article.description
      articleQuantity = article.qty
      articleCode = article.code
      articlePrice = article.price
      if (article['tags']) {
        for (const tag of article.tags) {
          articleTags.push(
            new FormGroup({
              name: new FormControl(tag.name, Validators.required),
            })
          )
        }
      }
    }

    this.articleForm = new FormGroup({
      name: new FormControl(articleName, Validators.required),
      description: new FormControl(articleDescription, Validators.required),
      image: new FormControl(articleImagePath, Validators.required),
      qty: new FormControl(articleQuantity, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      code: new FormControl(articleCode, Validators.required),
      price: new FormControl(articlePrice, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/),
      ]),
      tags: articleTags,
    })
  }
}
