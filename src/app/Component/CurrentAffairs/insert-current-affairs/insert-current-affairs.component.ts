import { Component, OnInit } from '@angular/core';
import { CurrentAffairsMasters } from 'src/app/Entity/CurrentAffairsMaster';
import { CurrentAffairsService } from '../../../Services/CurrentAffairs/current-affairs.service';
import { CategoryMasterService } from '../../../Services/CategoryMaster/category-master.service';
import { SubCategoryMasterService } from '../../../Services/SubCategoryService/sub-category-master.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-current-affairs',
  templateUrl: './insert-current-affairs.component.html',
  styleUrls: ['./insert-current-affairs.component.css']
})
export class InsertCurrentAffairsComponent implements OnInit {
  Current = {} as CurrentAffairsMasters;
  busy: Promise<any>;
  CategoryList: any;
  SubCategoryList : any;
  Result: any;
  PDF_Path_fileToUpload: File = null;
  Affairs_Img_Path_fileToUpload: File = null;  

  constructor(private _service: CurrentAffairsService,private router: Router,
    private _Categoryservice:CategoryMasterService,private _SubCategoryservice:SubCategoryMasterService) { }
  ngOnInit() { 
    this.GetCategoryList();
  }

  onFormSubmit() {
    this.Current.IsNew=true;
    this.busy =this._service.postCurrentAffairs(this.Current).subscribe(
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
      alert("Current Affairs Added Successfully.");
      this.Current={} as CurrentAffairsMasters;
    //this.router.navigate(['/get-current']);
    }
    else{
      alert("Current Affairs not Added.");
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

handleFileInput(files: FileList) {
  this.PDF_Path_fileToUpload = files.item(0);
}

handleFileInputImages(files: FileList) {
  this.Affairs_Img_Path_fileToUpload = files.item(0);
}

uploadFileToActivity() {
  // this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  // alert(this.fileToUpload + "File Uploaded Successfull");
  //   }, error => {
  //     console.log(error);
  //   });
}

GetSubCategory()
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