import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import {  NgModule } from '@angular/core';
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
import { GetSubCategoryComponent } from './Component/SubCategory/get-sub-category/get-sub-category.component';
import { GetSocialMediaComponent } from './Component/SocialMediaMaster/get-social-media/get-social-media.component';
import { InsertSocialMediaComponent } from './component/SocialMediaMaster/insert-social-media/insert-social-media.component';

import { GetMasterinfoComponent } from './component/MasterInfo/get-masterinfo/get-masterinfo.component';
import { InsertMasterinfoComponent } from './component/MasterInfo/insert-masterinfo/insert-masterinfo.component';
import { GetCourceMasterComponent } from './Component/courseMaster/get-cource-master/get-cource-master.component';
import { InsertCourceMasterComponent } from './Component/courseMaster/insert-cource-master/insert-cource-master.component';

import { GetCategoryComponent } from './component/CategoryMaster/get-category/get-category.component';
import { InsertCategoryComponent } from './Component/CategoryMaster/insert-category/insert-category.component';
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
import { GetBatchDetailsComponent } from './Component/BatchDetails/get-batch-details/get-batch-details.component';
import { InsertBatchDetailsComponent } from './Component/BatchDetails/insert-batch-details/insert-batch-details.component';
import { UpdateBatchDetailsComponent } from './Component/BatchDetails/update-batch-details/update-batch-details.component';
import { DeleteBatchDetailsComponent } from './Component/BatchDetails/delete-batch-details/delete-batch-details.component';
import {TalksAndInterviewComponent} from './Component/TalksAndInterview/TalksAndInterview.component';
import { GetBatchTopicDetailsComponent } from './Component/BatchTopicDetails/get-batch-topic-details/get-batch-topic-details.component';
import { InsertBatchTopicDetailsComponent } from './Component/BatchTopicDetails/insert-batch-topic-details/insert-batch-topic-details.component';
import { UpdateBatchTopicDetailsComponent } from './Component/BatchTopicDetails/update-batch-topic-details/update-batch-topic-details.component';
import { DeleteBatchTopicDetailsComponent } from './Component/BatchTopicDetails/delete-batch-topic-details/delete-batch-topic-details.component';
import { GetVideoLectureComponent } from './Component/VideoLectures/get-video-lecture/get-video-lecture.component';
import { InsertVideoLectureComponent } from './Component/VideoLectures/insert-video-lecture/insert-video-lecture.component';
import { UpdateVideoLectureComponent } from './Component/VideoLectures/update-video-lecture/update-video-lecture.component';
import { DeleteVideoLectureComponent } from './Component/VideoLectures/delete-video-lecture/delete-video-lecture.component';
import { GetNirmanresultMasterComponent } from './Component/NirmanResultMaster/get-nirmanresult-master/get-nirmanresult-master.component';
import { InsertNirmanresultMasterComponent } from './Component/NirmanResultMaster/insert-nirmanresult-master/insert-nirmanresult-master.component';
import { UpdateNirmanresultMasterComponent } from './Component/NirmanResultMaster/update-nirmanresult-master/update-nirmanresult-master.component';
import { DeleteNirmanresultMasterComponent } from './Component/NirmanResultMaster/delete-nirmanresult-master/delete-nirmanresult-master.component';
import {BannerMasterService} from "./Services/Banner/banner-master.service";
import { GetCurrentAffairsComponent } from './Component/CurrentAffairs/get-current-affairs/get-current-affairs.component';

//import { InsertGetCurrentAffairsComponent } from './Component/CurrentAffairs/insert-get-current-affairs/insert-get-current-affairs.component';
import { InsertCurrentAffairsComponent } from './Component/CurrentAffairs/insert-current-affairs/insert-current-affairs.component';
import { UpdatCurrentAffairsComponent } from './Component/CurrentAffairs/updat-current-affairs/updat-current-affairs.component';
import { UpdateCurrentAffairsComponent } from './Component/CurrentAffairs/update-current-affairs/update-current-affairs.component';
import { DeleteCurrentAffairsComponent } from './Component/CurrentAffairs/delete-current-affairs/delete-current-affairs.component';

import { CourseDetailsComponent } from './Component/mppcs/course-details/course-details.component';

import { from } from 'rxjs';
import { GetFacultyMasterComponent } from './component/FacultyMaster/get-faculty-master/get-faculty-master.component';
import { InsertFacultyMasterComponent } from './component/FacultyMaster/insert-faculty-master/insert-faculty-master.component';
import { UpdateFacultyMasterComponent } from './component/FacultyMaster/update-faculty-master/update-faculty-master.component';
import { DeleteFacultyMasterComponent } from './component/FacultyMaster/delete-faculty-master/delete-faculty-master.component';
import {CategoryMasterService} from "./Services/CategoryMaster/category-master.service";
import {CourseMasterService} from "./Services/CourseMaster/course-master.service";
import { BranchMasterService } from "./Services/BranchMaster/branch-master.service";
import {BatchTopicDetailsService} from "./Services/BatchTopicDetails/batch-topic-details.service";
import {NirmanResultMasterService} from "./Services/NirmanResultMaster/nirman-result-master.service";
import {SubCategoryMasterService} from "./Services/SubCategoryService/sub-category-master.service";
import {BatchDetailsService} from "./Services/BatchDetails/batch-details.service";
import { GetImagevediosComponent } from './component/imagevedios/get-imagevedios/get-imagevedios.component';
import { InsertImagevediosComponent } from './component/imagevedios/insert-imagevedios/insert-imagevedios.component';
import { GetStudentmasterComponent } from './component/student-master/get-studentmaster/get-studentmaster.component';
import { InsertStudentmasterComponent } from './component/student-master/insert-studentmaster/insert-studentmaster.component';
import { GetUsermasterComponent } from './component/user-master/get-usermaster/get-usermaster.component';
import { InsertUsermasterComponent } from './component/user-master/insert-usermaster/insert-usermaster.component';
import {ActivateGuard} from "src/app/activate.guard";
import {AdminService} from "./Services/admin.service";


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
    GetSubCategoryComponent,
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
    TalksAndInterviewComponent,
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
    CourseDetailsComponent,
    GetFacultyMasterComponent,
    InsertFacultyMasterComponent,
    UpdateFacultyMasterComponent,
    DeleteFacultyMasterComponent,
    GetImagevediosComponent,
    InsertImagevediosComponent,
    GetStudentmasterComponent,
    InsertStudentmasterComponent,
    GetUsermasterComponent,
    InsertUsermasterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgBusyModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    
  ],
   providers: [ActivateGuard, AdminService, EnquiryServiceService,ChatServicesService,AuthService,SocialMediaServiceService,CategoryMasterService,BannerMasterService,CourseMasterService,BranchMasterService,BatchTopicDetailsService,NirmanResultMasterService,SubCategoryMasterService,BatchDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
