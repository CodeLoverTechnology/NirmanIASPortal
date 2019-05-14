import { Component, OnInit } from '@angular/core';
import { CurrentAffairsService } from 'src/app/Services/CurrentAffairs/current-affairs.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-india-year-book2019',
  templateUrl: './india-year-book2019.component.html',
  styleUrls: ['./india-year-book2019.component.css']
})
export class IndiaYearBook2019Component implements OnInit {
  public result:any;
  public IndiaYearBookID:string ="10";
  public IndiaYearBook: any;
  public busy: Promise<any>;
  constructor(private _service:CurrentAffairsService){ }

  ngOnInit() {
    this.busy = this._service.getCurrentAffairsInfo().subscribe(
      result => {
       this.IndiaYearBook = result.filter(Curr => Curr.subCategory === this.IndiaYearBookID);
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
