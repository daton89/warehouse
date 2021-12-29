import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { ArticleImportComponent } from './article-import.component'

describe('ArticleImportComponent', () => {
  let component: ArticleImportComponent
  let fixture: ComponentFixture<ArticleImportComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ArticleImportComponent],
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImportComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should be created', () => {
    expect(component).toBeTruthy()
  })
})
