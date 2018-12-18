import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NIASInsertEnquiryComponent } from './niasinsert-enquiry/niasinsert-enquiry.component';
import { NIASEnquiryComponent } from './niasenquiry/niasenquiry.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"Menu",component:MenuComponent},
  {path:"niasinsert-enquiry",component:NIASInsertEnquiryComponent},
  {path:"niasenquiry",component:NIASEnquiryComponent},
  {path:"Contact",component:ContactComponent},
  {path:"Banner",component:BannerComponent},
  { path: '', redirectTo: '/Home', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
