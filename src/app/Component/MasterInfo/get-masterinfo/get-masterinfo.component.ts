import { Component, OnInit } from '@angular/core';
import { MasterInfoServiceService } from 'src/app/Services/MasterInfo/master-info-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-masterinfo',
  templateUrl: './get-masterinfo.component.html',
  styleUrls: ['./get-masterinfo.component.css']
})
export class GetMasterinfoComponent implements OnInit {

  public result:any;
  constructor(private _service:MasterInfoServiceService) { }
ngOnInit() {
    this._service.getMasterInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}

}
