import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/HomeComponent/home/home.component';
import { GetEnquiryComponent } from './Component/enquirycomponent/get-enquiry/get-enquiry.component';
import { InsertEnquiryComponent } from './Component/enquirycomponent/insert-enquiry/insert-enquiry.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  // {path:"Menu",component:MenuComponent},
  {path:"Enquiry",component:GetEnquiryComponent},
  {path:"InsertEnquiry",component:InsertEnquiryComponent},
  // {path:"Contact",component:ContactComponent},
  // {path:"Banner",component:BannerComponent},
  { path: '', redirectTo: '/home', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
