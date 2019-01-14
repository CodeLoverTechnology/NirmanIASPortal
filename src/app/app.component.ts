import { Component } from '@angular/core';
import { EnquiryModel } from './Entity/EnquiryModel';
import { EnquiryServiceService } from './Services/EnquiryServices/enquiry-service.service';
import { HttpErrorResponse } from '@Angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'NirmanIAS';
  private var_one:string;
  enquiry = {} as EnquiryModel;

  constructor(private _service:EnquiryServiceService) { }
ngOnInit(){ }
onSubmit()
{
 var Result = this._service.postEnquiry(this.enquiry).subscribe(
            result =>{
              this.enquiry =result ? result : undefined ;
              closeNav();
              debugger;
              alert('Success !!!.'+ this.enquiry);
              this.enquiry = {} as EnquiryModel;
              
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