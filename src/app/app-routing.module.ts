import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/HomeComponent/home/home.component';
import { GetEnquiryComponent } from './Component/enquirycomponent/get-enquiry/get-enquiry.component';
import { InsertEnquiryComponent } from './Component/enquirycomponent/insert-enquiry/insert-enquiry.component';
import { LogInComponent } from './component/log-in/log-in/log-in.component';
import { RegistrationComponent } from './component/registration/registration/registration.component';
import { ContactUsComponent } from './component/contact-Us/contact-us/contact-us.component';
import { Home2Component } from './component/home/home2/home2.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"home2",component:Home2Component},
  {path:"login",component:LogInComponent},
  {path:"Enquiry",component:GetEnquiryComponent},
  {path:"InsertEnquiry",component:InsertEnquiryComponent},
  {path:"Contact",component:ContactUsComponent},
  {path:"registration",component: RegistrationComponent},
  {path:"Aboutus",component:AboutUsComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
