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

  
  category = {} as CategoryMaster;
  Result: any;
  constructor(private _service:CategoryMasterService) { }
  ngOnInit(){ }
  onFormSubmit() {
    this._service.createCategoryMaster(this.category).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {
      console.log("Server Side Error....!");
    } else {
      console.log("Client Side Error !");
    }
    this.getcategoryinfo();
  };
}
   
    



  getcategoryinfo() {
    this.Result= this._service.getCategoryMaster();
  }



}
