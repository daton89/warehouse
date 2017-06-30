import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

// const URL = '/api/';
const URL = `${environment.apiUrl}/api/articles/import`;

@Component({
  selector: 'app-article-import',
  templateUrl: './article-import.component.html',
  styleUrls: ['./article-import.component.css']

})
export class ArticleImportComponent implements OnInit {

  public finishedUpload: any

  public uploader: FileUploader = new FileUploader({
    url: URL,
    method: 'POST'
  });
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() { }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.uploader.onCompleteItem = (response) => {
      console.log('response', response);
    }

    this.uploader.onSuccessItem = (response) => {
      response.onComplete = (response) => {
        this.finishedUpload = JSON.parse(response)
      }
    }
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }


}
