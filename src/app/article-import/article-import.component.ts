import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-article-import',
  templateUrl: './article-import.component.html',
  styleUrls: ['./article-import.component.css']

})
export class ArticleImportComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({ url: URL });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


}
