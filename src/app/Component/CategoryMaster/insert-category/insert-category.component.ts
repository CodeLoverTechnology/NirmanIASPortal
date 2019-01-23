import { Component, OnInit } from '@angular/core';
import { CategoryMaster } from 'src/app/Entity/category-master';
import { CategoryMasterService } from 'src/app/Services/CategoryMaster/category-master.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {

  
  CategoryMaster ={} as CategoryMaster;

  constructor(private _service:CategoryMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
  var Result = this._service.postCategoryMaster(this.CategoryMaster).subscribe(
            result =>{
              this.CategoryMaster =result ? result : undefined ;
              this.CategoryMaster;              
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
