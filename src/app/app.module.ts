import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy , CommonModule} from '@angular/common';
//import { bootstrap } from '@ng-bootstrap/ng-bootstrap'

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
import { ChatServicesService } from './Services/Chat/chat-services.service';
import { LogInComponent } from './Component/log-in/log-in/log-in.component';
import { RegistrationComponent } from './Component/registration/registration/registration.component';
import { AdminComponent } from './Component/admin/admin/admin.component';
import { AdminlinkComponent } from './Component/admin/adminlink/adminlink.component';
import { NIASHomeComponent } from './Component/niashome/niashome.component';
import { GalleryNIASComponent } from './Component/gallery-nias/gallery-nias.component';
import { VideoNIASComponent } from './Component/video-nias/video-nias.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { MagazineListComponent } from './Component/Magazine/magazine-list/magazine-list.component';
import { BookListComponent } from './Component/Books/book-list/book-list.component';
import { UPSCCoursesComponent } from './Component/Courses/upsc-courses/upsc-courses.component';
import { StatePCSCoursesComponent } from './Component/Courses/state-pcs-courses/state-pcs-courses.component';
import { TestSeriesComponent } from './Component/Courses/test-series/test-series.component';
import { InsertSubCategoryComponent } from './Component/SubCategory/insert-sub-category/insert-sub-category.component';
import { GetSubCategoryComponent } from './Component/SubCategory/get-sub-category/get-sub-category.component';
import { GetSocialMediaComponent } from './Component/SocialMediaMaster/get-social-media/get-social-media.component';
import { InsertSocialMediaComponent } from './Component/SocialMediaMaster/insert-social-media/insert-social-media.component';

import { GetMasterinfoComponent } from './Component/MasterInfo/get-masterinfo/get-masterinfo.component';
import { InsertMasterinfoComponent } from './Component/MasterInfo/insert-masterinfo/insert-masterinfo.component';
import { GetCourceMasterComponent } from './Component/courseMaster/get-cource-master/get-cource-master.component';
import { InsertCourceMasterComponent } from './Component/courseMaster/insert-cource-master/insert-cource-master.component';

import { GetCategoryComponent } from './Component/CategoryMaster/get-category/get-category.component';
import { InsertCategoryComponent } from './Component/CategoryMaster/insert-category/insert-category.component';
import { GetBranchComponent } from './Component/BranchMaster/get-branch/get-branch.component';
import { InsertBranchComponent } from './Component/BranchMaster/insert-branch/insert-branch.component';
import { GetBannerComponent } from './Component/Banner/get-banner/get-banner.component';
import { InsertBannerComponent } from './Component/Banner/insert-banner/insert-banner.component';
import { UPSCGSMainsSyllabusComponent } from './Component/Courses/upsc-gs-mains-syllabus/upsc-gs-mains-syllabus.component';
import { UPSCPrelimsGSSyllabusComponent } from './Component/Courses/upsc-prelims-gs-syllabus/upsc-prelims-gs-syllabus.component';
import { CurrentAffairsComponent } from './Component/current-affairs/current-affairs.component';
import { ClassNotesComponent } from './Component/class-notes/class-notes.component';
import { AuthService } from './Services/auth.service';
import { BookContentPOLITYComponent } from './Component/Books/book-content-polity/book-content-polity.component';
import { BookContentEthicsComponent } from './Component/Books/book-content-ethics/book-content-ethics.component';
import { BookContentEnvironmentComponent } from './Component/Books/book-content-environment/book-content-environment.component';
import { BookContentEconomyComponent } from './Component/Books/book-content-economy/book-content-economy.component';
import { GetchatComponent } from './Component/getchat/getchat.component';
import { PutchatComponent } from './Component/putchat/putchat.component';
import {SocialMediaServiceService} from "./Services/SocialMediaService/social-media-service.service";
import { BookContentSOCIALJUSTICEComponent } from './Component/Books/book-content-social-justice/book-content-social-justice.component';
import { BookContentScienceTechComponent } from './Component/Books/book-content-science-tech/book-content-science-tech.component';
import { BookContentPaperIIIComponent } from './Component/Books/book-content-paper-iii/book-content-paper-iii.component';
import { BookContentGeographyComponent } from './Component/Books/book-content-geography/book-content-geography.component';
import { BookContentGovernanceComponent } from './Component/Books/book-content-governance/book-content-governance.component';
import { BookContentHistoryComponent } from './Component/Books/book-content-history/book-content-history.component';
import { BookContentIndianSocietyComponent } from './Component/Books/book-content-indian-society/book-content-indian-society.component';
import { BookContentIndianSecurityComponent } from './Component/Books/book-content-indian-security/book-content-indian-security.component';
import { BookContentIndianIRComponent } from './Component/Books/book-content-indian-ir/book-content-indian-ir.component';
import { BookContentSociologyComponent } from './Component/Books/book-content-sociology/book-content-sociology.component';
import { BookContentAgricultureEconomicComponent } from './Component/Books/book-content-agriculture-economic/book-content-agriculture-economic.component';
import { BookContentModernIndiaComponent } from './Component/Books/book-content-modern-india/book-content-modern-india.component';
import {NgBusyModule, BusyConfig} from 'ng-busy';
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

import { InsertCurrentAffairsComponent } from './Component/CurrentAffairs/insert-current-affairs/insert-current-affairs.component';
import { UpdatCurrentAffairsComponent } from './Component/CurrentAffairs/updat-current-affairs/updat-current-affairs.component';
import { UpdateCurrentAffairsComponent } from './Component/CurrentAffairs/update-current-affairs/update-current-affairs.component';
import { DeleteCurrentAffairsComponent } from './Component/CurrentAffairs/delete-current-affairs/delete-current-affairs.component';

import { CourseDetailsComponent } from './Component/MPPCS/course-details/course-details.component';

import { from } from 'rxjs';
import { GetFacultyMasterComponent } from './Component/FacultyMaster/get-faculty-master/get-faculty-master.component';
import { InsertFacultyMasterComponent } from './Component/FacultyMaster/insert-faculty-master/insert-faculty-master.component';
import { UpdateFacultyMasterComponent } from './Component/FacultyMaster/update-faculty-master/update-faculty-master.component';
import { DeleteFacultyMasterComponent } from './Component/FacultyMaster/delete-faculty-master/delete-faculty-master.component';
import {CategoryMasterService} from "./Services/CategoryMaster/category-master.service";
import {CourseMasterService} from "./Services/CourseMaster/course-master.service";
import { BranchMasterService } from "./Services/BranchMaster/branch-master.service";
import {BatchTopicDetailsService} from "./Services/BatchTopicDetails/batch-topic-details.service";
import {NirmanResultMasterService} from "./Services/NirmanResultMaster/nirman-result-master.service";
import {SubCategoryMasterService} from "./Services/SubCategoryService/sub-category-master.service";
import {BatchDetailsService} from "./Services/BatchDetails/batch-details.service";
import {GetImagevediosComponent} from "./Component/imagevedios/get-imagevedios/get-imagevedios.component";
import { InsertImagevediosComponent } from './Component/imagevedios/insert-imagevedios/insert-imagevedios.component';
import { GetStudentmasterComponent } from './Component/student-master/get-studentmaster/get-studentmaster.component';
import { InsertStudentmasterComponent } from './Component/student-master/insert-studentmaster/insert-studentmaster.component';
import { GetUsermasterComponent } from './Component/user-master/get-usermaster/get-usermaster.component';
import { InsertUsermasterComponent } from './Component/user-master/insert-usermaster/insert-usermaster.component';
import { ActivateGuard } from "./Services/ActivateGuard/activate.guard";
import { ImagevediosService } from "./Services/ImageVedios/imagevedios.service";
import { StudentmasterService } from "./Services/StudentMaster/studentmaster.service";
import { UsermasterService } from "./Services/UserMaster/usermaster.service";
import { TopersAnswerCopyListComponent } from "./Component/TopersAnswerCopy/topers-answer-copy-list/topers-answer-copy-list.component";
import { TopersAnswerCopyForIndividualComponent } from "./Component/TopersAnswerCopy/topers-answer-copy-for-individual/topers-answer-copy-for-individual.component";
import { GetNotifictionmasterComponent } from './Component/notification-master/get-notifictionmaster/get-notifictionmaster.component';
import { InsertNotifictionmasterComponent } from './Component/notification-master/insert-notifictionmaster/insert-notifictionmaster.component';
import { SignupComponent } from './Component/signup/signup.component';
import { GuardService } from './Services/guard.service';
import { PrintedMaterialListComponent } from './Component/PrintedMaterial/printed-material-list/printed-material-list.component';
import { UploadFilesComponent } from './Component/upload-files/upload-files.component';
import { CurrentAffairsForHinduComponent } from './Component/CurrentAffairs/current-affairs-for-hindu/current-affairs-for-hindu.component';
import { BookContentStrategyComponent } from './Component/Books/book-content-strategy/book-content-strategy.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewPDFComponent } from './Component/view-pdf/view-pdf.component';
import { IndiaYearBook2019Component } from './Component/CurrentAffairs/india-year-book2019/india-year-book2019.component';
import { InsertTestStudentResultComponent } from './Component/TestStudentResult/insert-test-student-result/insert-test-student-result.component';
import { GetTestStudentResultListComponent } from './Component/TestStudentResult/get-test-student-result-list/get-test-student-result-list.component';
import { SendSMSBYAdminComponent } from './Component/SendSMS/send-smsbyadmin/send-smsbyadmin.component';
import { InsertVideoMasterComponent } from './Component/VideoMaster/insert-video-master/insert-video-master.component';
import { GetVideoMasterListComponent } from './Component/VideoMaster/get-video-master-list/get-video-master-list.component';
import { InsertPreviousYearQuestionAnswerComponent } from './Component/PreviousYearQuestionAnswer/insert-previous-year-question-answer/insert-previous-year-question-answer.component';
import { ListPreviousYearQuestionAnswerComponent } from './Component/PreviousYearQuestionAnswer/list-previous-year-question-answer/list-previous-year-question-answer.component';
import { GetOfflineTestListComponent } from './Component/Offlinetest/get-offline-test-list/get-offline-test-list.component';
import { InsertOfflineTestDetailsComponent } from './Component/Offlinetest/insert-offline-test-details/insert-offline-test-details.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { GetImportantTodayNewsComponent } from './Component/CurrentAffairs/ImportantTodayNews/get-important-today-news/get-important-today-news.component';
import { GetEconomicUpheavalComponent } from './Component/CurrentAffairs/get-economic-upheaval/get-economic-upheaval.component';

@NgModule({
  declarations: [
    AppComponent,
    //bootstrap,
    InsertEnquiryComponent,
    
    GetEnquiryComponent,
    UpdateEnquiryComponent,
    DeleteEnquiryComponent,
    AboutUsComponent,
    AdminlinkComponent,
    FooterComponent,
    LiveChatComponent,
    
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
    TopersAnswerCopyListComponent,
    TopersAnswerCopyForIndividualComponent,
    InsertNotifictionmasterComponent,
    GetNotifictionmasterComponent,
    SignupComponent,
    // UserProfileIconComponent,
    // UserDashboardComponent,
    PrintedMaterialListComponent,
    UploadFilesComponent,
    CurrentAffairsForHinduComponent,
    BookContentStrategyComponent,
    ViewPDFComponent,
    IndiaYearBook2019Component,
    InsertTestStudentResultComponent,
    GetTestStudentResultListComponent,
    SendSMSBYAdminComponent,
    InsertVideoMasterComponent,
    GetVideoMasterListComponent,
    InsertPreviousYearQuestionAnswerComponent,
    ListPreviousYearQuestionAnswerComponent,
    GetOfflineTestListComponent,
    InsertOfflineTestDetailsComponent,
    JwPaginationComponent,
    GetImportantTodayNewsComponent,
    GetEconomicUpheavalComponent 
  ],
  bootstrap: [ AppComponent ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
 CommonModule,
NgtUniversalModule,
 
 TransferHttpCacheModule,
HttpClientModule,
 
    
    HttpClientModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    PdfViewerModule,
    NgBusyModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    
  ],
  entryComponents: [
 ],
   providers: [
     ActivateGuard,  
    EnquiryServiceService,ChatServicesService,
    AuthService,SocialMediaServiceService,
    CategoryMasterService,BannerMasterService,
    CourseMasterService,BranchMasterService,
    BatchTopicDetailsService,NirmanResultMasterService,
    SubCategoryMasterService,BatchDetailsService,
    ImagevediosService,StudentmasterService,
    UsermasterService,GuardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
})
export class AppModule { }
