import { Component, OnInit, NgModule } from '@angular/core';
import { CategoryMasterService } from 'src/app/Services/CategoryMaster/category-master.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-get-category',
  templateUrl: './get-category.component.html',
  styleUrls: ['./get-category.component.css']
})
export class GetCategoryComponent implements OnInit {

  public result:any;
  constructor(private _service:CategoryMasterService) { }
ngOnInit() {
    this._service.getCategoryMaster().subscribe(res=>this.result=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}

}
