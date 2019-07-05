import { Component, OnInit } from '@angular/core';
import { PreviousYearQuestionAnswerModels } from 'src/app/Entity/PreviousYearQuestionAnswerModels';
import { PreviousYearQuestionAnswerService } from 'src/app/Services/PreviousYearQuestionAnswerServices/previous-year-question-answer.service';
import { Router } from '@angular/router';
import { CategoryMasterService } from 'src/app/Services/CategoryMaster/category-master.service';
import { SubCategoryMasterService } from 'src/app/Services/SubCategoryService/sub-category-master.service';
import { MasterInfoServiceService } from 'src/app/Services/MasterInfo/master-info-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-insert-previous-year-question-answer',
  templateUrl: './insert-previous-year-question-answer.component.html',
  styleUrls: ['./insert-previous-year-question-answer.component.css']
})
export class InsertPreviousYearQuestionAnswerComponent implements OnInit {
  Current = {} as PreviousYearQuestionAnswerModels;
  busy: Promise<any>;
  CategoryList: any;
  SubCategoryList : any;
  Result: any;
  PDF_Path_fileToUpload: File = null;
  Affairs_Img_Path_fileToUpload: File = null; 
  MasterCat : any;//="UPSC-Question";
  constructor(private _service: PreviousYearQuestionAnswerService,private router: Router,
    private _Categoryservice:CategoryMasterService,private _SubCategoryservice:SubCategoryMasterService,
    private _MasterService : MasterInfoServiceService) { }
  ngOnInit() { 
    this.GetCategoryList();
    //this.GetMasterList();
  }

  onFormSubmit()
  {
    this.Current.Pre_Mains=5;
    this._service.postPreviousYearQuestionAnswerDetails(this.Current).subscribe(
   result => console.log('Success !!!.',result),
      (err:HttpErrorResponse)=>{
     if(err.error instanceof Error){
            console.log("Server Side Error....!");
          }else{
            console.log("Client Side Error   !");
          }
        }) 
         
      //console.log(this.notification);
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

GetMasterList()
  {
    this._MasterService.getMasterInfo().subscribe(res=>this.MasterCat=res);
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

