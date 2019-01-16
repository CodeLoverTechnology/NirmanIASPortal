import { Component, OnInit } from '@angular/core';
import { EnquiryModel } from 'src/app/Entity/EnquiryModel';
import { EnquiryServiceService } from 'src/app/Services/EnquiryServices/enquiry-service.service';
import { HttpErrorResponse } from '@Angular/common/http';

@Component({
  selector: 'app-insert-enquiry',
  templateUrl: './insert-enquiry.component.html',
  styleUrls: ['./insert-enquiry.component.css']
})
export class InsertEnquiryComponent implements OnInit {
  private var_one:string;
  enquiry :EnquiryModel;

constructor(private _service:EnquiryServiceService) { }
ngOnInit(){ }
onSubmit()
{
 var Result = this._service.postEnquiry(this.enquiry).subscribe(
            result =>{
              this.enquiry =result ? result : undefined ;
              closeNav();
              alert('Dear Student Your Enquiry has Submited to NIRMAN IAS. We Well get back to you soon!!!...');
              this.enquiry;              
              } ,
    (err:HttpErrorResponse)=>{
   if(err.error instanceof Error){
    alert("Server Side Error....!");
        }else{
          alert("Client Side Error   !");
        }
      })
      debugger;
    console.log(Result);
    console.log("Result : "+ Result["enquiryID"]);

  }
   
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 
