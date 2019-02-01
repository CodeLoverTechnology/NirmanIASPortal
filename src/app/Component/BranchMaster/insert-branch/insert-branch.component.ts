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

  
  Branch ={} as BranchMaster;

  constructor(private _service:BranchMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
    
  this._service.postBranchMaster(this.Branch).subscribe(
    result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        })
      console.log(this.Branch);
    }}