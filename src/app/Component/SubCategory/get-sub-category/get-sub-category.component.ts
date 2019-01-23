import { Component, OnInit } from '@angular/core';
import { SubCategoryMasterService } from 'src/app/Services/SubCategoryService/sub-category-master.service';
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-get-sub-category',
  templateUrl: './get-sub-category.component.html',
  styleUrls: ['./get-sub-category.component.css']
})
export class GetSubCategoryComponent implements OnInit {

  public result:any;
  constructor(private _service:SubCategoryMasterService) { }
ngOnInit() {
    this._service.getsubcategoryInfo().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}

}
