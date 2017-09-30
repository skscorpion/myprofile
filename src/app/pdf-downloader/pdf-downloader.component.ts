import { Component, OnInit, Input } from '@angular/core';
import { BrowserXhr } from '@angular/http';
import * as fileSaver from 'file-saver';
//let fileSaver = require('filesaver.js');

@Component({
  selector: 'app-pdf-downloader',
  templateUrl: './pdf-downloader.component.html',
  styleUrls: ['./pdf-downloader.component.css']
})
export class PdfDownloaderComponent implements OnInit {
  @Input() no: any;

  public pending: boolean = false;

  constructor() { }
  ngOnInit() {
  }

  public download() {
    // Xhr creates new context so we need to create reference to this
    let self = this;

    // Status flag used in the template.
    this.pending = true;

    // Create the Xhr request object
    let xhr = new XMLHttpRequest();
    let url = 'api/hello/ResumeDownload';//`/api/pdf/iticket/${this.no}?lang=en`;
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    // Xhr callback when we get a result back
    // We are not using arrow function because we need the 'this' context
    xhr.onreadystatechange = function () {

      // We use setTimeout to trigger change detection in Zones
      setTimeout(() => { self.pending = false; }, 0);

      // If we get an HTTP status OK (200), save the file using fileSaver
      if (xhr.readyState === 4 && xhr.status === 200) {
        var blob = new Blob([this.response], { type: 'application/pdf' });
        fileSaver.saveAs(blob, 'SenthilKumar_CV.pdf');
      }
    };

    // Start the Ajax request
    xhr.send();
  }

}
