import { Component, OnInit } from '@angular/core';
import { CurrentAffairsService } from 'src/app/Services/CurrentAffairs/current-affairs.service';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { CurrentAffairsMasters } from 'src/app/Entity/CurrentAffairsMaster';

@Component({
  selector: 'app-get-important-today-news',
  templateUrl: './get-important-today-news.component.html',
  styleUrls: ['./get-important-today-news.component.css']
})
export class GetImportantTodayNewsComponent implements OnInit {
  public result:any;
  public busy: Promise<any>;
  items: Array<any>;
  pageOfItems: Array<any>;
  Current = {} as CurrentAffairsMasters;
  constructor(private _service:CurrentAffairsService) { }

  ngOnInit() {
    this.Current.Category="4";
    this.Current.SubCategory="17";
    this.busy = this._service.getCurrentAffairsInfo(this.Current).subscribe(
      result => {
      this.items= result;
       this.pageOfItems= result;
      },
      (err: HttpClientModule) => {
        if (err instanceof Error) {
          console.log("Server Side Error....!");
        } else {
          console.log("Client Side Error   !" + err);
        }
      });
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
}
}