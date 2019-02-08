import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminComponent } from './component/admin/admin/admin.component';
import { AdminlinkComponent } from './Component/admin/adminlink/adminlink.component';
import { NIASHomeComponent } from './Component/niashome/niashome.component';
import { GalleryNIASComponent } from './Component/gallery-nias/gallery-nias.component';
import { VideoNIASComponent } from './Component/video-nias/video-nias.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { MagazineListComponent } from './component/Magazine/magazine-list/magazine-list.component';
import { BookListComponent } from './component/Books/book-list/book-list.component';
import { UPSCCoursesComponent } from './Component/Courses/upsc-courses/upsc-courses.component';
import { StatePCSCoursesComponent } from './Component/Courses/state-pcs-courses/state-pcs-courses.component';
import { TestSeriesComponent } from './Component/Courses/test-series/test-series.component';
import { InsertSubCategoryComponent } from './component/SubCategory/insert-sub-category/insert-sub-category.component';
import { GetSocialMediaComponent } from './component/SocialMediaMaster/get-social-media/get-social-media.component';
import { InsertSocialMediaComponent } from './component/SocialMediaMaster/insert-social-media/insert-social-media.component';

import { GetMasterinfoComponent } from './component/MasterInfo/get-masterinfo/get-masterinfo.component';
import { InsertMasterinfoComponent } from './component/MasterInfo/insert-masterinfo/insert-masterinfo.component';
import { GetCourceMasterComponent } from './component/courseMaster/get-cource-master/get-cource-master.component';
import { InsertCourceMasterComponent } from './component/courseMaster/insert-cource-master/insert-cource-master.component';

import { GetCategoryComponent } from './component/CategoryMaster/get-category/get-category.component';
import { InsertCategoryComponent } from './component/CategoryMaster/insert-category/insert-category.component';
import { GetBranchComponent } from './component/BranchMaster/get-branch/get-branch.component';
import { InsertBranchComponent } from './component/BranchMaster/insert-branch/insert-branch.component';
import { GetBannerComponent } from './component/Banner/get-banner/get-banner.component';
import { InsertBannerComponent } from './component/Banner/insert-banner/insert-banner.component';
import { UPSCGSMainsSyllabusComponent } from './Component/Courses/upsc-gs-mains-syllabus/upsc-gs-mains-syllabus.component';
import { UPSCPrelimsGSSyllabusComponent } from './Component/Courses/upsc-prelims-gs-syllabus/upsc-prelims-gs-syllabus.component';
import { CurrentAffairsComponent } from './Component/current-affairs/current-affairs.component';
import { ClassNotesComponent } from './Component/class-notes/class-notes.component';
import { AuthService } from './Services/auth.service';
import { BookContentPOLITYComponent } from './Component/Books/book-content-polity/book-content-polity.component';
import { BookContentEthicsComponent } from './Component/Books/book-content-ethics/book-content-ethics.component';
import { BookContentEnvironmentComponent } from './Component/Books/book-content-environment/book-content-environment.component';
import { BookContentEconomyComponent } from './Component/Books/book-content-economy/book-content-economy.component';
import { Home1Component } from './component/niashome/home1/home1.component';
import { GetchatComponent } from './component/getchat/getchat.component';
import { PutchatComponent } from './component/putchat/putchat.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertEnquiryComponent,
    GetEnquiryComponent,
    UpdateEnquiryComponent,
    DeleteEnquiryComponent,
    AboutUsComponent,
    AdminlinkComponent,
    FooterComponent,
    LiveChatComponent,
    SideMenuComponent,
    LogInComponent,
    RegistrationComponent,
    AdminComponent,
    NIASHomeComponent,
    GalleryNIASComponent,
    VideoNIASComponent,
    ContactUsComponent,
    MagazineListComponent,
    BookListComponent,
    UPSCCoursesComponent,
    StatePCSCoursesComponent,
    TestSeriesComponent,
    InsertSubCategoryComponent,
    GetSocialMediaComponent,
    InsertSocialMediaComponent,
    GetMasterinfoComponent,
    InsertMasterinfoComponent,
    GetCourceMasterComponent,
    InsertCourceMasterComponent,
    GetCategoryComponent,
    InsertCategoryComponent,
    GetBranchComponent,
    InsertBranchComponent,
    GetBannerComponent,
    InsertBannerComponent,
    UPSCGSMainsSyllabusComponent,
    UPSCPrelimsGSSyllabusComponent,
    UPSCCoursesComponent,
    TestSeriesComponent,
    StatePCSCoursesComponent,
    CurrentAffairsComponent,
    ClassNotesComponent,
    BookContentPOLITYComponent,
    BookContentEthicsComponent,
    BookContentEnvironmentComponent,
    BookContentEconomyComponent,
    Home1Component,
    GetchatComponent,
    PutchatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule    
  ],
   providers: [EnquiryServiceService,ChatServicesService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
