import { Component, OnInit } from '@angular/core';
import { VideoMastersServicesService } from 'src/app/Services/VideoMastersServices/video-masters-services.service';
import { VideoMastersModel } from 'src/app/Entity/VideoMastersModel';
import { Router } from '@angular/router';
import { CategoryMasterService } from 'src/app/Services/CategoryMaster/category-master.service';
import { SubCategoryMasterService } from 'src/app/Services/SubCategoryService/sub-category-master.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insert-video-master',
  templateUrl: './insert-video-master.component.html',
  styleUrls: ['./insert-video-master.component.css']
})
export class InsertVideoMasterComponent implements OnInit {
  Current = {} as VideoMastersModel;
  busy: Promise<any>;
  CategoryList: any;
  SubCategoryList : any;
  Result: any;
  PDF_Path_fileToUpload: File = null;
  Affairs_Img_Path_fileToUpload: File = null; 
  constructor(private _service: VideoMastersServicesService,private router: Router,
    private _Categoryservice:CategoryMasterService,private _SubCategoryservice:SubCategoryMasterService) { }
  ngOnInit() { 
    this.GetCategoryList();
  }

  onFormSubmit() {
    this.busy =this._service.postVideoMastersModel(this.Current).subscribe(
      res => this.Result = res);
     (err: HttpErrorResponse) => {
    if (err.error instanceof Error) {      
      alert(' server error');
    } else {
      alert('Client error');
    }
   };
  if(this.busy)
    {
      alert("Video Added Successfully.");
      this.Current={} as VideoMastersModel;
    //this.router.navigate(['/get-current']);
    }
    else{
      alert("Video not Added Successfully. Try it again!!!...");
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

GetSubCategory(id:any)
{
  this._SubCategoryservice.getsubcategoryInfo().subscribe(res=>this.SubCategoryList=res);
    (err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Server Side Error !");
  }else{
      console.log("Client Side Error   !");
  }
}
}

}
