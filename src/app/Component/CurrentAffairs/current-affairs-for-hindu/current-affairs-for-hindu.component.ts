import { Component, OnInit } from '@angular/core';
import { CurrentAffairsService } from 'src/app/Services/CurrentAffairs/current-affairs.service';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { CurrentAffairsMasters } from 'src/app/Entity/CurrentAffairsMaster';

@Component({
  selector: 'app-current-affairs-for-hindu',
  templateUrl: './current-affairs-for-hindu.component.html',
  styleUrls: ['./current-affairs-for-hindu.component.css']
})
export class CurrentAffairsForHinduComponent implements OnInit {
  public result:any;
  public TheHinduID:string ="7";
  //public TheHinduNews: any;
  public busy: Promise<any>;
  items: Array<any>;
  pageOfItems: Array<any>;
  Current = {} as CurrentAffairsMasters;
  constructor(private _service:CurrentAffairsService) { }

  ngOnInit() {
    this.Current.SubCategory="7";
    this.busy = this._service.getCurrentAffairsInfo(this.Current).subscribe(
      result => {
       //this.TheHinduNews = result.filter(Curr => Curr.subCategory === this.TheHinduID);
       this.items= result.filter(Curr => Curr.subCategory === this.TheHinduID);
       this.pageOfItems= result.filter(Curr => Curr.subCategory === this.TheHinduID);
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
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
