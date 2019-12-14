import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEnquiryComponent } from './Component/enquirycomponent/get-enquiry/get-enquiry.component';
import { InsertEnquiryComponent } from './Component/enquirycomponent/insert-enquiry/insert-enquiry.component';
import { RegistrationComponent } from './Component/registration/registration/registration.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { GalleryNIASComponent } from './Component/gallery-nias/gallery-nias.component';
import { VideoNIASComponent } from './Component/video-nias/video-nias.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { MagazineListComponent } from './Component/Magazine/magazine-list/magazine-list.component';
import { BookListComponent } from './Component/Books/book-list/book-list.component';
import { UPSCCoursesComponent } from './Component/Courses/upsc-courses/upsc-courses.component';
import { StatePCSCoursesComponent } from './Component/Courses/state-pcs-courses/state-pcs-courses.component';
import { TestSeriesComponent } from './Component/Courses/test-series/test-series.component';
import { UPSCGSMainsSyllabusComponent } from './Component/Courses/upsc-gs-mains-syllabus/upsc-gs-mains-syllabus.component';
import { UPSCPrelimsGSSyllabusComponent } from './Component/Courses/upsc-prelims-gs-syllabus/upsc-prelims-gs-syllabus.component';
import { CurrentAffairsComponent } from './Component/current-affairs/current-affairs.component';
import { ClassNotesComponent } from './Component/class-notes/class-notes.component';
import { GetSocialMediaComponent } from "./Component/SocialMediaMaster/get-social-media/get-social-media.component";
import { GetBranchComponent } from './Component/BranchMaster/get-branch/get-branch.component';
import { GetBannerComponent } from './Component/Banner/get-banner/get-banner.component';
import { GetMasterinfoComponent } from './Component/MasterInfo/get-masterinfo/get-masterinfo.component';
import { InsertSocialMediaComponent } from './Component/SocialMediaMaster/insert-social-media/insert-social-media.component';
import { InsertBannerComponent } from './Component/Banner/insert-banner/insert-banner.component';
import { AdminlinkComponent } from './Component/admin/adminlink/adminlink.component';
import { BookContentEnvironmentComponent } from './Component/Books/book-content-environment/book-content-environment.component';
import { BookContentPOLITYComponent } from './Component/Books/book-content-polity/book-content-polity.component';
import { BookContentEconomyComponent } from './Component/Books/book-content-economy/book-content-economy.component';
import { GetchatComponent } from './Component/getchat/getchat.component';
import { BookContentEthicsComponent } from './Component/Books/book-content-ethics/book-content-ethics.component';
import { NIASHomeComponent } from './Component/niashome/niashome.component';
import { AdminComponent } from './Component/admin/admin/admin.component';
import { BookContentGovernanceComponent } from './Component/Books/book-content-governance/book-content-governance.component';
import { BookContentHistoryComponent } from './Component/Books/book-content-history/book-content-history.component';
import { BookContentIndianIRComponent } from './Component/Books/book-content-indian-ir/book-content-indian-ir.component';
import { BookContentIndianSecurityComponent } from './Component/Books/book-content-indian-security/book-content-indian-security.component';
import { BookContentIndianSocietyComponent } from './Component/Books/book-content-indian-society/book-content-indian-society.component';
import { BookContentPaperIIIComponent } from './Component/Books/book-content-paper-iii/book-content-paper-iii.component';
import { BookContentScienceTechComponent } from './Component/Books/book-content-science-tech/book-content-science-tech.component';
import { BookContentSOCIALJUSTICEComponent } from './Component/Books/book-content-social-justice/book-content-social-justice.component';
import { BookContentSociologyComponent } from './Component/Books/book-content-sociology/book-content-sociology.component';
import { BookContentGeographyComponent } from './Component/Books/book-content-geography/book-content-geography.component';
import { BookContentAgricultureEconomicComponent } from './Component/Books/book-content-agriculture-economic/book-content-agriculture-economic.component';
import { BookContentModernIndiaComponent } from './Component/Books/book-content-modern-india/book-content-modern-india.component';
import { TalksAndInterviewComponent } from './Component/TalksAndInterview/TalksAndInterview.component';
import { SpecialClassesComponent } from './Component/special-classes/special-classes.component';
import { NIASCourseFeeStrutureComponent } from './Component/Courses/nias-course-fee-struture/nias-course-fee-struture.component';
import { TestYourSelfComponent } from './Component/test-your-self/test-your-self.component';
import { GetSubCategoryComponent } from './Component/SubCategory/get-sub-category/get-sub-category.component';
import { from } from 'rxjs';
import { InsertBatchDetailsComponent } from './Component/BatchDetails/insert-batch-details/insert-batch-details.component';
import { GetCategoryComponent } from "./Component/CategoryMaster/get-category/get-category.component";
import { InsertCategoryComponent } from "./Component/CategoryMaster/insert-category/insert-category.component";
import { GetBatchDetailsComponent } from "./Component/BatchDetails/get-batch-details/get-batch-details.component";
import { InsertCourceMasterComponent } from "./Component/courseMaster/insert-cource-master/insert-cource-master.component";
import { GetCourceMasterComponent } from "./Component/courseMaster/get-cource-master/get-cource-master.component";
import { InsertBranchComponent } from "./Component/BranchMaster/insert-branch/insert-branch.component";
import { InsertNirmanresultMasterComponent } from "./Component/NirmanResultMaster/insert-nirmanresult-master/insert-nirmanresult-master.component";
import { GetNirmanresultMasterComponent } from "./Component/NirmanResultMaster/get-nirmanresult-master/get-nirmanresult-master.component";
import { InsertCurrentAffairsComponent } from "./Component/CurrentAffairs/insert-current-affairs/insert-current-affairs.component";
import { GetCurrentAffairsComponent } from "./Component/CurrentAffairs/get-current-affairs/get-current-affairs.component";
import { InsertBatchTopicDetailsComponent } from "./Component/BatchTopicDetails/insert-batch-topic-details/insert-batch-topic-details.component";
import { GetBatchTopicDetailsComponent } from "./Component/BatchTopicDetails/get-batch-topic-details/get-batch-topic-details.component";
import { InsertSubCategoryComponent } from "./Component/SubCategory/insert-sub-category/insert-sub-category.component";
import { GetFacultyMasterComponent } from './Component/FacultyMaster/get-faculty-master/get-faculty-master.component';
import { InsertFacultyMasterComponent } from './Component/FacultyMaster/insert-faculty-master/insert-faculty-master.component';
import { GetVideoLectureComponent } from './Component/VideoLectures/get-video-lecture/get-video-lecture.component';
import { InsertVideoLectureComponent } from './Component/VideoLectures/insert-video-lecture/insert-video-lecture.component';
import { UpdateEnquiryComponent } from './Component/enquirycomponent/update-enquiry/update-enquiry.component';

import { ActivateGuard } from './Services/ActivateGuard/activate.guard';
import { InsertStudentmasterComponent } from "./Component/student-master/insert-studentmaster/insert-studentmaster.component";
import { GetStudentmasterComponent } from "./Component/student-master/get-studentmaster/get-studentmaster.component";
import { GetUsermasterComponent } from "./Component/user-master/get-usermaster/get-usermaster.component";
import { InsertUsermasterComponent } from "./Component/user-master/insert-usermaster/insert-usermaster.component";
import { GetImagevediosComponent } from "./Component/imagevedios/get-imagevedios/get-imagevedios.component";
import { InsertImagevediosComponent } from "./Component/imagevedios/insert-imagevedios/insert-imagevedios.component";
import { GetNotifictionmasterComponent } from "./Component/notification-master/get-notifictionmaster/get-notifictionmaster.component";
import { InsertNotifictionmasterComponent } from "./Component/notification-master/insert-notifictionmaster/insert-notifictionmaster.component";
import { TopersAnswerCopyListComponent } from './Component/TopersAnswerCopy/topers-answer-copy-list/topers-answer-copy-list.component';
import { SignupComponent } from "./Component/signup/signup.component";
import { GuardService } from "./Services/guard.service";
import { TopersAnswerCopyForIndividualComponent } from './Component/TopersAnswerCopy/topers-answer-copy-for-individual/topers-answer-copy-for-individual.component';
import { UpdateBatchDetailsComponent } from './Component/BatchDetails/update-batch-details/update-batch-details.component';
import { PrintedMaterialListComponent } from './Component/PrintedMaterial/printed-material-list/printed-material-list.component';
import { CurrentAffairsForHinduComponent } from './Component/CurrentAffairs/current-affairs-for-hindu/current-affairs-for-hindu.component';
import { BookContentStrategyComponent } from './Component/Books/book-content-strategy/book-content-strategy.component';
import { LogInComponent } from './Component/log-in/log-in/log-in.component';
import { InsertMasterinfoComponent } from './Component/MasterInfo/insert-masterinfo/insert-masterinfo.component';
import { DeleteEnquiryComponent } from './Component/enquirycomponent/delete-enquiry/delete-enquiry.component';
import { ViewPDFComponent } from './Component/view-pdf/view-pdf.component';
import { IndiaYearBook2019Component } from './Component/CurrentAffairs/india-year-book2019/india-year-book2019.component';
import { GetTestStudentResultListComponent } from './Component/TestStudentResult/get-test-student-result-list/get-test-student-result-list.component';
import { InsertTestStudentResultComponent } from './Component/TestStudentResult/insert-test-student-result/insert-test-student-result.component';
import { UploadFilesComponent } from './Component/upload-files/upload-files.component';
import { SendSMSBYAdminComponent } from './Component/SendSMS/send-smsbyadmin/send-smsbyadmin.component';
import { InsertPreviousYearQuestionAnswerComponent } from './Component/PreviousYearQuestionAnswer/insert-previous-year-question-answer/insert-previous-year-question-answer.component';
import { InsertVideoMasterComponent } from './Component/VideoMaster/insert-video-master/insert-video-master.component';
import { GetVideoMasterListComponent } from './Component/VideoMaster/get-video-master-list/get-video-master-list.component';
import { ListPreviousYearQuestionAnswerComponent } from './Component/PreviousYearQuestionAnswer/list-previous-year-question-answer/list-previous-year-question-answer.component';
import { GetOfflineTestListComponent } from './Component/Offlinetest/get-offline-test-list/get-offline-test-list.component';
import { UpdateFacultyMasterComponent } from './Component/FacultyMaster/update-faculty-master/update-faculty-master.component';
import { DeleteFacultyMasterComponent } from './Component/FacultyMaster/delete-faculty-master/delete-faculty-master.component';
import { GetImportantTodayNewsComponent } from './Component/CurrentAffairs/ImportantTodayNews/get-important-today-news/get-important-today-news.component';
import { GetEconomicUpheavalComponent } from './Component/CurrentAffairs/get-economic-upheaval/get-economic-upheaval.component';

const routes: Routes = [
  { path: "", component: NIASHomeComponent },

  {
    path: "admin", component: AdminComponent, canActivate: [ActivateGuard], children:
      [
        { path: " ", component: AdminlinkComponent },
        { path: "admin/getEnquiry", component: GetEnquiryComponent },
        { path: "admin/update-enquiry" , component: UpdateEnquiryComponent },        
        { path: "admin/Delete-enquiry" , component: DeleteEnquiryComponent },
        
        { path: "admin/get-facultyMaster", component: GetFacultyMasterComponent },
        { path: "admin/getchat", component: GetchatComponent },
        { path: "admin/BranchList", component: GetBranchComponent },
        { path: "admin/GetStudentmaster", component: GetStudentmasterComponent },
        { path: "admin/update-facultyMaster", component: UpdateFacultyMasterComponent },
        { path: "admin/delete-facultyMaster", component: DeleteFacultyMasterComponent },
        
        { path: "admin/GetSocialMediaList", component: GetSocialMediaComponent },
        { path: '', component: AdminlinkComponent },
        { path: "admin/insert-facultyMaster", component: InsertFacultyMasterComponent },
        { path: "admin/insert-current", component: InsertCurrentAffairsComponent },
        { path: "admin/insert-banner", component: InsertBannerComponent },
        { path: "admin/insert-branch", component: InsertBranchComponent },
        { path: "admin/InsertSocialmedia", component: InsertSocialMediaComponent },
        { path: "admin/Getmaster", component: GetMasterinfoComponent },
        { path: "admin/InsertMaster", component: InsertMasterinfoComponent },
        { path: "admin/get-category", component: GetCategoryComponent },
        
        
        { path: "admin/insert-category", component: InsertCategoryComponent },
        { path: "admin/get-subcategory", component: GetSubCategoryComponent },
        { path: "admin/insert-subcategory", component: InsertSubCategoryComponent },
        { path: "admin/insert-course", component: InsertCourceMasterComponent },
        { path: "admin/get-usermaster", component: GetUsermasterComponent },
        { path: "admin/insert-usermaster", component: InsertUsermasterComponent },
        { path: "admin/insert-nirmanresult", component: InsertNirmanresultMasterComponent },
        { path: "admin/InsertBatchInfo", component: InsertBatchDetailsComponent },
        { path: "admin/insert-batchtopicdetail", component: InsertBatchTopicDetailsComponent },
        { path: "admin/insert-subcategory", component: InsertSubCategoryComponent },
        { path: "admin/insert-VideoLecture", component: InsertVideoLectureComponent },
        { path: "admin/insert-studentmaster", component: InsertStudentmasterComponent },
        { path: "admin/get-studentmaster", component: GetStudentmasterComponent },
        { path: "admin/insert-notification", component: InsertNotifictionmasterComponent }, 
        { path: "insert-imagevedio", component: InsertImagevediosComponent },
        { path : "admin/InsertTestStudentResult", component: InsertTestStudentResultComponent},
        { path : "admin/InsertPreviousYearQuestion", component: InsertPreviousYearQuestionAnswerComponent},
        { path : "admin/InsertInsertVideoMaster", component: InsertVideoMasterComponent},
        { path : "SendSMS" , component: SendSMSBYAdminComponent},
      ]
  },
  {path:"GetBannerList", component:GetBannerComponent},
  { path: "Gallery", component: GalleryNIASComponent },
  { path: "login", component: LogInComponent },
  { path: "signup", component: SignupComponent },
  { path: "GetVideoMasterList", component: GetVideoMasterListComponent },
  { path: "ListPreviousYearQuestionAnswer", component: ListPreviousYearQuestionAnswerComponent },
  // {path:"admin",component:AdminComponent,canActivate:[ActivateGuard]},
  
  { path: "InsertEnquiry", component: InsertEnquiryComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "Aboutus", component: AboutUsComponent },
  { path: "UploadFiles", component: UploadFilesComponent },
  { path: "Video", component: VideoNIASComponent },
  { path: "Contact", component: ContactUsComponent },
  { path: "Magazine", component: MagazineListComponent },
  { path: "Books", component: BookListComponent },
  { path: "UPSC_Course", component: UPSCCoursesComponent },
  { path: "StatePCS", component: StatePCSCoursesComponent },
  { path: "TestSeries", component: TestSeriesComponent },
  { path: "GSMainsSyllabus", component: UPSCGSMainsSyllabusComponent },
  { path: "PrelimsGSSyllabus", component: UPSCPrelimsGSSyllabusComponent },
  { path: "CurrentAffairs", component: CurrentAffairsComponent },
  { path: "ClassNotes", component: ClassNotesComponent },
  { path: "get-socialmedia", component: GetSocialMediaComponent },
  { path: "EthicsBook", component: BookContentEthicsComponent },
  { path: "EnvironmentBook", component: BookContentEnvironmentComponent },
  { path: "POLITYBook", component: BookContentPOLITYComponent },
  { path: "Economics", component: BookContentEconomyComponent },
  { path: "NIAS_TalksAndInterview", component: TalksAndInterviewComponent },  
  { path: "get-BranchList", component: GetBranchComponent },   
  { path: "NIAS_Geography", component: BookContentGeographyComponent },
  { path: "NIAS_Governance", component: BookContentGovernanceComponent },
  { path: "NIAS_History", component: BookContentHistoryComponent },
  { path: "NIAS_IndianIR", component: BookContentIndianIRComponent },
  { path: "NIAS_IndianSecurity", component: BookContentIndianSecurityComponent },
  { path: "NIAS_IndianSociety", component: BookContentIndianSocietyComponent },
  { path: "NIAS_PaperIII", component: BookContentPaperIIIComponent },
  { path: "NIAS_ScienceTech", component: BookContentScienceTechComponent },
  { path: "NIAS_SOCIALJUSTICE", component: BookContentSOCIALJUSTICEComponent },
  { path: "NIAS_Sociology", component: BookContentSociologyComponent },
  { path: "NIAS_AgricultureEconomic", component: BookContentAgricultureEconomicComponent },
  { path: "NIAS_ModernIndia", component: BookContentModernIndiaComponent },
  { path: "NIAS_SpecialClasses", component: SpecialClassesComponent },
  { path: "NIAS_CourseFee", component: NIASCourseFeeStrutureComponent },
  { path: "NIAS_TestYourSelf", component: TestYourSelfComponent },  
  { path: "get-batchdetails", component: GetBatchDetailsComponent },  
  { path: "get-course", component: GetCourceMasterComponent },
  { path: "get-nirmanresult", component: GetNirmanresultMasterComponent },
  { path: "get-current", component: GetCurrentAffairsComponent },
  { path: "get-batchtopicdetail", component: GetBatchTopicDetailsComponent },
  { path: "get-facultyMaster", component: GetFacultyMasterComponent },
  { path: "get-VideoLecture", component: GetVideoLectureComponent },
  { path: "get-imagevedio", component: GetImagevediosComponent },
  
  { path: "get-notification", component: GetNotifictionmasterComponent },
  
  { path: "TopersAnswerCopyList", component: TopersAnswerCopyListComponent },
  { path: "TopersAnswerCopyForIndividual", component: TopersAnswerCopyForIndividualComponent },
  { path: "UpdateBatchDetails", component: UpdateBatchDetailsComponent },

  { path: "PrintedMaterialList", component: PrintedMaterialListComponent },
  { path: "The-Hindu-CurrentAffairs", component: CurrentAffairsForHinduComponent },
  { path: "Get-Important-Today-News", component:GetImportantTodayNewsComponent},
  { path: "Audio-Article", component:GetEconomicUpheavalComponent},
  { path: "BookContentStrategy", component: BookContentStrategyComponent },
  { path : "ViewPDF", component:ViewPDFComponent},
  { path : "IndiaYearBook", component:IndiaYearBook2019Component},
  { path : "GetTestStudentResultList" , component:GetTestStudentResultListComponent},
  { path : "GetOfflineTestList" , component:GetOfflineTestListComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
