import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleImportComponent } from './article-import.component';

describe('ArticleImportComponent', () => {
  let component: ArticleImportComponent;
  let fixture: ComponentFixture<ArticleImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
