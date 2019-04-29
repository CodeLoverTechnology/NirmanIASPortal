import { Component, OnInit } from '@angular/core';
import {SubCategoryMasterService} from "src/app/Services/SubCategoryService/sub-category-master.service";
import {SubCategoryMaster} from "src/app/Entity/sub-category-master";
import {CategoryMasterService} from "src/app/Services/CategoryMaster/category-master.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-insert-sub-category',
  templateUrl: './insert-sub-category.component.html',
  styleUrls: ['./insert-sub-category.component.css']
})
export class InsertSubCategoryComponent implements OnInit {
    Obj_SubCategory = {} as SubCategoryMaster;
    CategoryList:any;
    busy: Promise<any>;
constructor(private _service:SubCategoryMasterService,private _Categoryservice :CategoryMasterService ) { }
ngOnInit(){ 
  this.GetCategoryList();
}
onFormSubmit()
{
  this.busy = this._service.postsubcategory(this.Obj_SubCategory).subscribe(
  result => this.Obj_SubCategory=result);
    (err:HttpErrorResponse)=>{
   if(err.error instanceof Error){
          console.log("Server Side Error....!");
        }else{
          console.log("Client Side Error   !");
        }
      };

      if(this.busy)
    {
      alert("Sub-Category Added Successfully.");
      this.Obj_SubCategory = {} as SubCategoryMaster;
    //this.router.navigate(['/get-current']);
    }
    else{
      alert("Sub-Category not Added.");
    }
  
  }

  GetCategoryList()
  {
    this._Categoryservice.getCategoryMaster().subscribe(res=>this.CategoryList=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
  }

}
}
 
