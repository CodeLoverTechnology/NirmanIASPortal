import { Component, OnInit } from '@angular/core';
import {SubCategoryMasterService} from "src/app/Services/SubCategoryService/sub-category-master.service";
import {SubCategoryMaster} from "src/app/Entity/sub-category-master";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-insert-sub-category',
  templateUrl: './insert-sub-category.component.html',
  styleUrls: ['./insert-sub-category.component.css']
})
export class InsertSubCategoryComponent implements OnInit {
  private var_one:string;
  
    SubCategoryMaster ={} as SubCategoryMaster;

constructor(private _service:SubCategoryMasterService) { }
ngOnInit(){ }
onSubmit()
{
 var Result = this._service.postsubcategory(this.SubCategoryMaster).subscribe(
            result =>{
              this.SubCategoryMaster =result ? result : undefined ;
              this.SubCategoryMaster;              
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
