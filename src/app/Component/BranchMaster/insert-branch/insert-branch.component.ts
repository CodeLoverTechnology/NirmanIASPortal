import { Component, OnInit } from '@angular/core';
import { BranchMasterService } from 'src/app/Services/BranchMaster/branch-master.service';
import { BranchMaster } from 'src/app/Entity/branch-master';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-branch',
  templateUrl: './insert-branch.component.html',
  styleUrls: ['./insert-branch.component.css']
})
export class InsertBranchComponent implements OnInit {

  
  BranchMaster ={} as BranchMaster;

  constructor(private _service:BranchMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
  var Result = this._service.postBranchMaster(this.BranchMaster).subscribe(
            result =>{
              this.BranchMaster =result ? result : undefined ;
              this.BranchMaster;              
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
