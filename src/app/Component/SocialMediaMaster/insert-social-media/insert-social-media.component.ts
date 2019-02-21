import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@Angular/common/http';
import { SocialMediaModel } from 'src/app/Entity/SocialMediaModel';
import { SocialMediaServiceService } from 'src/app/Services/SocialMediaService/social-media-service.service';

@Component({
  selector: 'app-insert-social-media',
  templateUrl: './insert-social-media.component.html',
  styleUrls: ['./insert-social-media.component.css']
})
export class InsertSocialMediaComponent implements OnInit {
  busy: Promise<any>;
  privatevar_one: string;  
  socialMediaModel = {} as SocialMediaModel;

constructor(private _service: SocialMediaServiceService) { }
ngOnInit(){ }
onSubmit()
{
//  var Result = this._service.postSocialMedia(this.socialMediaModel).subscribe(
//            result =>{
//              this.socialMediaModel =result ? result : undefined ;
//              this.socialMediaModel;              
//             } ,
             this.busy = this._service.postSocialMedia(this.socialMediaModel)
             .subscribe(result => this.socialMediaModel = result);  
(err:HttpErrorResponse)=>{
 if(err.error instanceof Error){
  console.log("Server Side Error....!");
      }
      else{
        console.log("Client Side Error   !");
      }
    }

// dataSaved=false;
// bannerForm:any;
// FormGroup:any;
// allBanners:Observable<Banner[]>;
// bannerIdToUpdate=null;
// massage=null;
//   constructor( private frombuilder:FormBuilder, private bannerService:BannerService) { }

//   ngOnInit() {
//     this.bannerForm=this.frombuilder.group({
//       BannerID:['',[Validators.required]],
//       BannerTitle:['',[Validators.required]],
//       BannerImagesPath:['',[Validators.required]],
//       SubTitle:['',[Validators.required]],
//       Remark:['',[Validators.required]],
//       CreatedBy:['',[Validators.required]],
//       CreatedDate:['',[Validators.required]],
//       ModifiedBy:['',[Validators.required]],
//       ModifiedDate:['',[Validators.required]],
//       Active:['',[Validators.required]]
//     });
   
//     this.loadAllBanners();
//   }
//   loadAllBanners()
//     {
//       this.allBanners=this.bannerService.getAllBanner();
//     }
 
//     onFormSubmit(){

//     this.dataSaved=false;
//     let banner=this.bannerForm.value;
//     this.CreateBanner(banner);
//     this.bannerForm.reset();

//   }
//   CreateBanner(banner:Banner){
//     if(this.bannerIdToUpdate==null)
//     {
//       this.bannerService.createBanner(banner).subscribe(
//         ()=>{
//           this.dataSaved=true;
//           this.massage="record save";
//           this.loadAllBanners();
//           this.bannerIdToUpdate=null;
//           this.bannerForm.reset();
//         }
//       );
//     }else{
//       banner.BannerID=this.bannerIdToUpdate;
//       this.bannerService.UpdateBanner(banner)
//       .subscribe(()=>{
//         this.dataSaved=true;
//         this.massage="record update";
//         this.loadAllBanners();
//         this.bannerIdToUpdate=null;
//         this.bannerForm.reset();
      
//       });
//     }
//   }
//   loadbannerToEdit(BannerId:string){
//     this.bannerService.getBannerById(BannerId).subscribe(banner=>{
//       this.massage=null;
//       this.dataSaved=false;
//       this.bannerIdToUpdate=banner.BannerID;
//       this.bannerForm.controls['BannerID'].setvalue(banner.BannerID);
//       this.bannerForm.controls['BannerTitle'].setvalue(banner.BannerTitle);
//       this.bannerForm.controls['BannerImagePath'].setvalue(banner.BannerImagesPath);
//       this.bannerForm.controls['SubTitle'].setvalue(banner.SubTitle);
//       this.bannerForm.controls['Remarks'].setvalue(banner.Remarks);
//       this.bannerForm.controls['CreatedBy'].setvalue(banner.CreatedBy);
//       this.bannerForm.controls['CreatedDate'].setvalue(banner.CreatedDate);
//       this.bannerForm.controls['ModifiedBy'].setvalue(banner.ModifiedBy);
//       this.bannerForm.controls['ModifiedDate'].setvalue(banner.ModifiedDate);
//       this.bannerForm.controls['Active'].setvalue(banner.Active);
      
      
      
//     });
//   }

//   deleteBanner(bannerId:string){
//   this.bannerService.DeleteBannerById(bannerId)
//   .subscribe(()=>
//   {
//     this.massage="record deleted";
//     this.loadAllBanners();
//     this.bannerIdToUpdate=null;
//     this.bannerForm.reset();
//   })
//   }

//   resetForm(){
//     this.bannerForm.reset();
//     this.massage=null;
//     this.dataSaved=false;
//   }

//   // this.myGroup = new FormGroup({
//    // firstName: new FormControl();
// }

//   }

// }
  }
}

