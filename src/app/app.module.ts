import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NIASEnquiryComponent } from './niasenquiry/niasenquiry.component';
import { NIASInsertEnquiryComponent } from './niasinsert-enquiry/niasinsert-enquiry.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './banner/banner.component';
import {EnquiryServicesService} from "./enquiry-services.service";
@NgModule({
  declarations: [
    AppComponent,
    NIASEnquiryComponent,
    NIASInsertEnquiryComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EnquiryServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
