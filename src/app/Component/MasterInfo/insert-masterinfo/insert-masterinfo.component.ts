import { Component, OnInit } from '@angular/core';
import { MasterInfoModel } from 'src/app/Entity/master-info-model';
import { MasterInfoServiceService } from 'src/app/Services/MasterInfo/master-info-service.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-masterinfo',
  templateUrl: './insert-masterinfo.component.html',
  styleUrls: ['./insert-masterinfo.component.css']
})
export class InsertMasterinfoComponent implements OnInit {

 
  MasterInfoModel ={} as MasterInfoModel;

constructor(private _service:MasterInfoServiceService) { }
ngOnInit(){ }
onSubmit()
{
var Result = this._service.postMasterInfo(this.MasterInfoModel).subscribe(
          result =>{
            this.MasterInfoModel =result ? result : undefined ;
            this.MasterInfoModel;              
            } ,
  (err:HttpErrorResponse)=>{
 if(err.error instanceof Error){
  console.log("Server Side Error....!");
      }else{
        console.log("Client Side Error   !");
      }
    })

}

}
