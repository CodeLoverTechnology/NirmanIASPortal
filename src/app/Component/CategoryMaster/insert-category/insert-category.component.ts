import { Component, OnInit, NgModule } from '@angular/core';
import { CategoryMaster } from 'src/app/Entity/category-master';
import { CategoryMasterService } from 'src/app/Services/CategoryMaster/category-master.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-category',
  templateUrl: './insert-category.component.html',
  styleUrls: ['./insert-category.component.css']
})
export class InsertCategoryComponent implements OnInit {

  
  Category = {} as CategoryMaster;

  constructor(private _service:CategoryMasterService) { }
  ngOnInit(){ }
  onSubmit()
  {
    
  this._service.postCategory(this.Category).subscribe(
    result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Client Side Error....!");
          }else{
            console.log("Server Side Error   !");
          }
        })
      console.log(this.Category);
    }}
