import { Component, OnInit } from '@angular/core';
import { SubCategoryMasterService } from 'src/app/Services/SubCategoryService/sub-category-master.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-get-social-media',
  templateUrl: './get-social-media.component.html',
  styleUrls: ['./get-social-media.component.css']
})
export class GetSocialMediaComponent implements OnInit {

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
