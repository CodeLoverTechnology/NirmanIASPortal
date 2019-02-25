import { Component, OnInit, NgModule } from '@angular/core';
import { BranchMasterService } from "src/app/Services/BranchMaster/branch-master.service";
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-get-branch',
  templateUrl: './get-branch.component.html',
  styleUrls: ['./get-branch.component.css']
})
export class GetBranchComponent implements OnInit {
  public result:any;
  constructor(private _service:BranchMasterService) { }
ngOnInit() {
 
  this.GetBranchList();
}


GetBranchList()
{
  this._service.getBranchInfo().subscribe(res=>this.result=res);
  (err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
      console.log("Server Side Error !");
}else{
    console.log("Client Side Error   !");
}
  }
}

}


