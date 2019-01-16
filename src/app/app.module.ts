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
import { FooterComponent } from './Component/footer/footer.component';
import { LiveChatComponent } from './Component/live-chat/live-chat.component';
import { SideMenuComponent } from './Component/side-menu/side-menu.component';
import { ChatServicesService } from './Services/Chat/chat-services.service';
import { LogInComponent } from './component/log-in/log-in/log-in.component';
import { RegistrationComponent } from './component/registration/registration/registration.component';
import { ContactUsComponent } from './component/contact-Us/contact-us/contact-us.component';
import { AdminComponent } from './component/admin/admin/admin.component';
import { Home2Component } from './component/home/home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InsertEnquiryComponent,
    GetEnquiryComponent,
    UpdateEnquiryComponent,
    DeleteEnquiryComponent,
    AboutUsComponent,
    FooterComponent,
    LiveChatComponent,
    SideMenuComponent,
    LogInComponent,
    RegistrationComponent,
    ContactUsComponent,
    AdminComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
   providers: [EnquiryServiceService,ChatServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
