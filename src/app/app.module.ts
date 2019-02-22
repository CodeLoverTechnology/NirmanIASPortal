import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { 
   NgModule } from '@angular/core';
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
import { GetSocialMediaComponent } from './Component/SocialMediaMaster/get-social-media/get-social-media.component';
import {InsertBannerComponent} from "./Component/Banner/insert-banner/insert-banner.component";
import {InsertCategoryComponent} from "./Component/CategoryMaster/insert-category/insert-category.component";
import {InsertBranchComponent} from "./Component/BranchMaster/insert-branch/insert-branch.component";
import { GetMasterinfoComponent } from './component/MasterInfo/get-masterinfo/get-masterinfo.component';
import { InsertMasterinfoComponent } from './component/MasterInfo/insert-masterinfo/insert-masterinfo.component';
import { GetCourceMasterComponent } from './Component/courseMaster/get-cource-master/get-cource-master.component';
import {CourseMasterService} from "./Services/CourseMaster/course-master.service";
import { GetCategoryComponent } from './Component/CategoryMaster/get-category/get-category.component';
import { GetBranchComponent } from './component/BranchMaster/get-branch/get-branch.component';
import { GetBannerComponent } from './Component/Banner/get-banner/get-banner.component';
import {BannerMasterService} from "./Services/Banner/banner-master.service";
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
import {SocialMediaServiceService} from "./Services/SocialMediaService/social-media-service.service";
import { BookContentSOCIALJUSTICEComponent } from './Component/books/book-content-social-justice/book-content-social-justice.component';
import { BookContentScienceTechComponent } from './Component/books/book-content-science-tech/book-content-science-tech.component';
import { BookContentPaperIIIComponent } from './Component/books/book-content-paper-iii/book-content-paper-iii.component';
import { BookContentGeographyComponent } from './Component/books/book-content-geography/book-content-geography.component';
import { BookContentGovernanceComponent } from './Component/books/book-content-governance/book-content-governance.component';
import { BookContentHistoryComponent } from './Component/books/book-content-history/book-content-history.component';
import { BookContentIndianSocietyComponent } from './Component/books/book-content-indian-society/book-content-indian-society.component';
import { BookContentIndianSecurityComponent } from './Component/books/book-content-indian-security/book-content-indian-security.component';
import { BookContentIndianIRComponent } from './Component/books/book-content-indian-ir/book-content-indian-ir.component';
import { BookContentSociologyComponent } from './Component/Books/book-content-sociology/book-content-sociology.component';
import { BookContentAgricultureEconomicComponent } from './Component/books/book-content-agriculture-economic/book-content-agriculture-economic.component';
import { BookContentModernIndiaComponent } from './Component/books/book-content-modern-india/book-content-modern-india.component';
import {NgBusyModule} from 'ng-busy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SpecialClassesComponent } from './Component/special-classes/special-classes.component';
import { NIASCourseFeeStrutureComponent } from './Component/Courses/nias-course-fee-struture/nias-course-fee-struture.component';
import { TestYourSelfComponent } from './Component/test-your-self/test-your-self.component';
import {InsertCourceMasterComponent} from "./Component/courseMaster/insert-cource-master/insert-cource-master.component";
import {  
  MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
  MatInputModule, MatTooltipModule, MatToolbarModule  
} from '@angular/material';
 import {BranchMasterService} from "./Services/BranchMaster/branch-master.service";
 import {CategoryMasterService} from "./Services/CategoryMaster/category-master.service";
 import { MatRadioModule } from '@angular/material/radio';
 import {SocialMediaServiceService} from "./Services/SocialMediaService/social-media-service.service";
 import {InsertSocialMediaComponent} from "./Component/SocialMediaMaster/insert-social-media/insert-social-media.component";

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
    InsertBranchComponent,
    LiveChatComponent,
    SideMenuComponent,
    GetSubCategoryComponent,
    LogInComponent,
    RegistrationComponent,
    AdminComponent,
    InsertCategoryComponent,
    NIASHomeComponent,
    GalleryNIASComponent,
    VideoNIASComponent,
    ContactUsComponent,
    MagazineListComponent,
    BookListComponent,
    UPSCCoursesComponent,
    InsertSocialMediaComponent,
    InsertCourceMasterComponent,
    StatePCSCoursesComponent,
    TestSeriesComponent,
    InsertSubCategoryComponent,
    GetSocialMediaComponent,
    GetMasterinfoComponent,
    InsertMasterinfoComponent,
    GetCourceMasterComponent,
    GetCategoryComponent,
    GetBranchComponent,
    GetBannerComponent,
    UPSCGSMainsSyllabusComponent,
    UPSCPrelimsGSSyllabusComponent,
    UPSCCoursesComponent,
    TestSeriesComponent,
    StatePCSCoursesComponent,
    CurrentAffairsComponent,
    ClassNotesComponent,
    InsertBannerComponent,
    BookContentPOLITYComponent,
    BookContentEthicsComponent,
    BookContentEnvironmentComponent,
    BookContentEconomyComponent,
    Home1Component,
    GetchatComponent,
    PutchatComponent,
    BookContentSociologyComponent,
    BookContentSOCIALJUSTICEComponent,
    BookContentScienceTechComponent,
    BookContentPaperIIIComponent,
    BookContentGeographyComponent,
    BookContentGovernanceComponent,
    TalksAndInterviewComponent,
    BookContentHistoryComponent,
    BookContentIndianSocietyComponent,
    BookContentIndianSecurityComponent,
    BookContentIndianIRComponent,
    BookContentAgricultureEconomicComponent,
    BookContentModernIndiaComponent,
    //TalksAndInterviewComponent,
    SpecialClassesComponent,
    NIASCourseFeeStrutureComponent,
    TestYourSelfComponent,
    GetBatchDetailsComponent,
    InsertBatchDetailsComponent,
    UpdateBatchDetailsComponent,
    DeleteBatchDetailsComponent,
   
    GetBatchTopicDetailsComponent,
    InsertBatchTopicDetailsComponent,
    UpdateBatchTopicDetailsComponent,
    DeleteBatchTopicDetailsComponent,
    GetVideoLectureComponent,
    InsertVideoLectureComponent,
    UpdateVideoLectureComponent,
    DeleteVideoLectureComponent,
    GetNirmanresultMasterComponent,
    InsertNirmanresultMasterComponent,
    UpdateNirmanresultMasterComponent,
    DeleteNirmanresultMasterComponent,
    GetCurrentAffairsComponent,
  
    InsertCurrentAffairsComponent,
    UpdatCurrentAffairsComponent,
    UpdateCurrentAffairsComponent,
    DeleteCurrentAffairsComponent,
    GetFacultyMasterComponent,
    InsertFacultyMasterComponent,
    UpdateFacultyMasterComponent,
    DeleteFacultyMasterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgBusyModule,
    BrowserAnimationsModule,
    NoopAnimationsModule, MatButtonModule, MatMenuModule, MatDatepickerModule,MatNativeDateModule , MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
    MatInputModule, MatTooltipModule, MatToolbarModule,MatRadioModule,
  ],
   providers: [EnquiryServiceService,ChatServicesService,AuthService,MatDatepickerModule,HttpClientModule,BranchMasterService,BannerMasterService,CategoryMasterService,CourseMasterService,SocialMediaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
