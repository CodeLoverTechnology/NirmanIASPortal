import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@Angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Component/HomeComponent/home/home.component';
import { InsertEnquiryComponent } from './Component/enquirycomponent/insert-enquiry/insert-enquiry.component';
import { GetEnquiryComponent } from './Component/enquirycomponent/get-enquiry/get-enquiry.component';
import { UpdateEnquiryComponent } from './Component/enquirycomponent/update-enquiry/update-enquiry.component';
import { DeleteEnquiryComponent } from './Component/enquirycomponent/delete-enquiry/delete-enquiry.component';
import { EnquiryServiceService } from './Services/EnquiryServices/enquiry-service.service';
import { AboutUsComponent } from './Component/about-us/about-us.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertEnquiryComponent,
    GetEnquiryComponent,
    UpdateEnquiryComponent,
    DeleteEnquiryComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
   providers: [EnquiryServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
