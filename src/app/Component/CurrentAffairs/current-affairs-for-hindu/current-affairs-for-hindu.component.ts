import { Component, OnInit } from '@angular/core';
import { CurrentAffairsService } from 'src/app/Services/CurrentAffairs/current-affairs.service';
import { HttpErrorResponse, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-current-affairs-for-hindu',
  templateUrl: './current-affairs-for-hindu.component.html',
  styleUrls: ['./current-affairs-for-hindu.component.css']
})
export class CurrentAffairsForHinduComponent implements OnInit {
  public result:any;
  public TheHinduID:string ="7";
  public TheHinduNews: any;
  public busy: Promise<any>;
  constructor(private _service:CurrentAffairsService) { }

  ngOnInit() {
    this.busy = this._service.getCurrentAffairsInfo().subscribe(
      result => {
       this.TheHinduNews = result.filter(Curr => Curr.subCategory === this.TheHinduID);
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
