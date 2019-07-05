import { Component, OnInit } from '@angular/core';
import { CurrentAffairsService } from "../../../Services/CurrentAffairs/current-affairs.service";
import { HttpErrorResponse } from '@angular/common/http';
import { CurrentAffairsMasters } from 'src/app/Entity/CurrentAffairsMaster';


@Component({
  selector: 'app-get-current-affairs',
  templateUrl: './get-current-affairs.component.html',
  styleUrls: ['./get-current-affairs.component.css']
})
export class GetCurrentAffairsComponent implements OnInit {

  public result:any;
  Current = {} as CurrentAffairsMasters;
  constructor(private _service:CurrentAffairsService) { }
ngOnInit() {
  debugger;
    this._service.getCurrentAffairsInfo(this.Current).subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}
}
