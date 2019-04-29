import { Component, OnInit, NgModule } from '@angular/core';
import { CurrentAffairsService } from 'src/app/Services/CurrentAffairs/current-affairs.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-current-affairs',
  templateUrl: './current-affairs.component.html',
  styleUrls: ['./current-affairs.component.css']
})
export class CurrentAffairsComponent implements OnInit {

  public result:any;
  public CurrentAffairsID:string ="6";
  public CurrentAffairsList: any;
  public busy: Promise<any>;
 
  constructor(private _service:CurrentAffairsService) { }
ngOnInit() {
  this.busy = this._service.getCurrentAffairsInfo().subscribe(
    result => {
     this.CurrentAffairsList = result.filter(Curr => Curr.subCategory === this.CurrentAffairsID);
    },
    (err: HttpClientModule) => {
      if (err instanceof Error) {
        console.log("Server Side Error....!");
      } else {
        console.log("Client Side Error   !" + err);
      }
    });
}
}


