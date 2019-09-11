import { Component, OnInit, NgModule } from '@angular/core';
import { CurrentAffairsService } from 'src/app/Services/CurrentAffairs/current-affairs.service';
import { HttpClientModule } from '@angular/common/http';
import { CurrentAffairsMasters } from 'src/app/Entity/CurrentAffairsMaster';

@Component({
  selector: 'app-current-affairs',
  templateUrl: './current-affairs.component.html',
  styleUrls: ['./current-affairs.component.css']
})
export class CurrentAffairsComponent implements OnInit {

  public result:any;
  public CurrentAffairsID:string ="6";
  //public CurrentAffairsList: any;
  public busy: Promise<any>;
  Current = {} as CurrentAffairsMasters;
  items: Array<any>;
  pageOfItems: Array<any>;
  constructor(private _service:CurrentAffairsService) { }
ngOnInit() {
  this.Current.SubCategory="6";
  this.busy = this._service.getCurrentAffairsInfo(this.Current).subscribe(
    result => {  
    // this.CurrentAffairsList = result;//.filter(CurrInfo => CurrInfo.subCategory === this.CurrentAffairsID);
     this.items = result;
     this.pageOfItems  = result;
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


