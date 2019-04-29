import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.component.html',
  styleUrls: ['./view-pdf.component.css']
})
export class ViewPDFComponent implements OnInit {
  pdfSrc: string = '/assets/CurrentAffairs/CurrentAffairsTheHindu/The_Hindu_17_April_2019.pdf';
  @ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;
  
  constructor(private router: Router,private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.pdfSrc=params.pdfSrc ;
    });
  }

  search(stringToSearch: string) {
    this.pdfComponent.pdfFindController.executeCommand('find', {
      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: stringToSearch
    });
  }
}
