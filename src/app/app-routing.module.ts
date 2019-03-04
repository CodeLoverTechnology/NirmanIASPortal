import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEnquiryComponent } from './Component/enquirycomponent/get-enquiry/get-enquiry.component';
import { InsertEnquiryComponent } from './Component/enquirycomponent/insert-enquiry/insert-enquiry.component';
import { LogInComponent } from './component/log-in/log-in/log-in.component';
import { RegistrationComponent } from './component/registration/registration/registration.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
// import { NIASHomeComponent } from './component/niashome/niashome.component';
import { GalleryNIASComponent } from './Component/gallery-nias/gallery-nias.component';
import { VideoNIASComponent } from './Component/video-nias/video-nias.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { MagazineListComponent } from './component/Magazine/magazine-list/magazine-list.component';
import { BookListComponent } from './component/Books/book-list/book-list.component';
import { UPSCCoursesComponent } from './Component/Courses/upsc-courses/upsc-courses.component';
import { StatePCSCoursesComponent } from './Component/Courses/state-pcs-courses/state-pcs-courses.component';
import { TestSeriesComponent } from './Component/Courses/test-series/test-series.component';
import { UPSCGSMainsSyllabusComponent } from './Component/Courses/upsc-gs-mains-syllabus/upsc-gs-mains-syllabus.component';
import { UPSCPrelimsGSSyllabusComponent } from './Component/Courses/upsc-prelims-gs-syllabus/upsc-prelims-gs-syllabus.component';
import { CurrentAffairsComponent } from './Component/current-affairs/current-affairs.component';
import { ClassNotesComponent } from './Component/class-notes/class-notes.component';
import {GetSocialMediaComponent} from "./Component/SocialMediaMaster/get-social-media/get-social-media.component";
import { GetBranchComponent } from './component/BranchMaster/get-branch/get-branch.component';
import { GetBannerComponent } from './component/Banner/get-banner/get-banner.component';
import { GetMasterinfoComponent } from './component/MasterInfo/get-masterinfo/get-masterinfo.component';
import { InsertSocialMediaComponent } from './component/SocialMediaMaster/insert-social-media/insert-social-media.component';

import { InsertBannerComponent } from './component/Banner/insert-banner/insert-banner.component';
// import { AdminComponent } from './Component/admin/admin/admin.component';
import { AdminlinkComponent } from './Component/admin/adminlink/adminlink.component';
import { BookContentEnvironmentComponent } from './Component/Books/book-content-environment/book-content-environment.component';
import { BookContentPOLITYComponent } from './Component/Books/book-content-polity/book-content-polity.component';
import { BookContentEconomyComponent } from './Component/Books/book-content-economy/book-content-economy.component';
import { GetchatComponent } from './component/getchat/getchat.component';
import { BookContentEthicsComponent } from './Component/Books/book-content-ethics/book-content-ethics.component';
import { NIASHomeComponent } from './Component/niashome/niashome.component';
import { AdminComponent } from './component/admin/admin/admin.component';
import { BookContentGovernanceComponent } from './Component/books/book-content-governance/book-content-governance.component';
import { BookContentHistoryComponent } from './Component/books/book-content-history/book-content-history.component';
import { BookContentIndianIRComponent } from './Component/books/book-content-indian-ir/book-content-indian-ir.component';
import { BookContentIndianSecurityComponent } from './Component/books/book-content-indian-security/book-content-indian-security.component';
import { BookContentIndianSocietyComponent } from './Component/books/book-content-indian-society/book-content-indian-society.component';
import { BookContentPaperIIIComponent } from './Component/books/book-content-paper-iii/book-content-paper-iii.component';
import { BookContentScienceTechComponent } from './Component/books/book-content-science-tech/book-content-science-tech.component';
import { BookContentSOCIALJUSTICEComponent } from './Component/books/book-content-social-justice/book-content-social-justice.component';
import { BookContentSociologyComponent } from './Component/Books/book-content-sociology/book-content-sociology.component';
import { BookContentGeographyComponent } from './Component/books/book-content-geography/book-content-geography.component';
import { BookContentAgricultureEconomicComponent } from './Component/books/book-content-agriculture-economic/book-content-agriculture-economic.component';
import { BookContentModernIndiaComponent } from './Component/books/book-content-modern-india/book-content-modern-india.component';
import { TalksAndInterviewComponent } from './Component/TalksAndInterview/TalksAndInterview.component';
import { SpecialClassesComponent } from './Component/special-classes/special-classes.component';
import { NIASCourseFeeStrutureComponent } from './Component/Courses/nias-course-fee-struture/nias-course-fee-struture.component';
import { TestYourSelfComponent } from './Component/test-your-self/test-your-self.component';
import {GetSubCategoryComponent } from './Component/SubCategory/get-sub-category/get-sub-category.component';
import { from } from 'rxjs';
import { InsertBatchDetailsComponent } from './Component/BatchDetails/insert-batch-details/insert-batch-details.component';
import {GetCategoryComponent} from "./component/CategoryMaster/get-category/get-category.component";
import {InsertCategoryComponent} from "./Component/CategoryMaster/insert-category/insert-category.component";
import {GetBatchDetailsComponent} from "./Component/BatchDetails/get-batch-details/get-batch-details.component";
import {InsertCourceMasterComponent} from "./Component/courseMaster/insert-cource-master/insert-cource-master.component";
import {GetCourceMasterComponent} from "./Component/courseMaster/get-cource-master/get-cource-master.component";
import {InsertBranchComponent} from "./component/BranchMaster/insert-branch/insert-branch.component";
import {InsertNirmanresultMasterComponent} from "./Component/NirmanResultMaster/insert-nirmanresult-master/insert-nirmanresult-master.component";
import {GetNirmanresultMasterComponent} from "./Component/NirmanResultMaster/get-nirmanresult-master/get-nirmanresult-master.component";
import {InsertCurrentAffairsComponent} from "./Component/CurrentAffairs/insert-current-affairs/insert-current-affairs.component";
import {GetCurrentAffairsComponent} from "./Component/CurrentAffairs/get-current-affairs/get-current-affairs.component";
import {InsertBatchTopicDetailsComponent} from "./Component/BatchTopicDetails/insert-batch-topic-details/insert-batch-topic-details.component";
import {GetBatchTopicDetailsComponent} from "./Component/BatchTopicDetails/get-batch-topic-details/get-batch-topic-details.component";
import {InsertSubCategoryComponent} from "./component/SubCategory/insert-sub-category/insert-sub-category.component";
import { GetFacultyMasterComponent } from './component/FacultyMaster/get-faculty-master/get-faculty-master.component';
import { InsertFacultyMasterComponent } from './component/FacultyMaster/insert-faculty-master/insert-faculty-master.component';
import { GetVideoLectureComponent } from './Component/VideoLectures/get-video-lecture/get-video-lecture.component';
import { InsertVideoLectureComponent } from './Component/VideoLectures/insert-video-lecture/insert-video-lecture.component';
import { UpdateEnquiryComponent } from './Component/enquirycomponent/update-enquiry/update-enquiry.component';
import { ActivateGuard} from './activate.guard';
import {InsertStudentmasterComponent} from "./Component/student-master/insert-studentmaster/insert-studentmaster.component";
import {GetStudentmasterComponent} from "./Component/student-master/get-studentmaster/get-studentmaster.component";
import {GetUsermasterComponent} from "./Component/user-master/get-usermaster/get-usermaster.component";
import {InsertUsermasterComponent} from "./Component/user-master/insert-usermaster/insert-usermaster.component";
import {GetImagevediosComponent} from "./Component/imagevedios/get-imagevedios/get-imagevedios.component";
import {InsertImagevediosComponent} from "./Component/imagevedios/insert-imagevedios/insert-imagevedios.component";
import {GetNotifictionmasterComponent} from "./Component/notification-master/get-notifictionmaster/get-notifictionmaster.component";
import {InsertNotifictionmasterComponent} from "./Component/notification-master/insert-notifictionmaster/insert-notifictionmaster.component";
import { TopersAnswerCopyListComponent } from './Component/TopersAnswerCopy/topers-answer-copy-list/topers-answer-copy-list.component';
import { TopersAnswerCopyForIndividualComponent } from './Component/TopersAnswerCopy/topers-answer-copy-for-individual/topers-answer-copy-for-individual.component';
import { UpdateBatchDetailsComponent } from './Component/BatchDetails/update-batch-details/update-batch-details.component';
import { PrintedMaterialListComponent } from './Component/PrintedMaterial/printed-material-list/printed-material-list.component';
const routes: Routes = [
  {path:"",component:NIASHomeComponent},
  {path:"login",component:LogInComponent},
  {path:"admin",component:AdminComponent,canActivate:[ActivateGuard],children:
 [
     {path:" ",component:AdminlinkComponent},
     {path:"admin/getEnquiry",component:GetEnquiryComponent},
     {path:"admin/Gallery",component:GalleryNIASComponent},
     {path:"admin/get-facultyMaster",component:GetFacultyMasterComponent},
     {path:"admin/getchat",component:GetchatComponent},
     {path: "admin/update-enquiry",component:UpdateEnquiryComponent},
     {path:"admin/BranchList", component:GetBranchComponent},
     {path:"admin/GetStudentmaster", component:GetStudentmasterComponent},
    //  {path:"admin/GetBannerList", component:GetBannerComponent},
     {path:"admin/GetSocialMediaList", component:GetSocialMediaComponent},
    {path:'',component:AdminlinkComponent},
  ]},
 // {path:"admin",component:AdminComponent,canActivate:[ActivateGuard]},
  {path:"Getmaster",component:GetMasterinfoComponent},
  {path:"InsertEnquiry",component:InsertEnquiryComponent},
  {path:"registration",component: RegistrationComponent},
  {path:"Aboutus",component:AboutUsComponent},
  {path:"get-banner",component:GetBannerComponent},
  {path:"Video",component:VideoNIASComponent},
  {path:"Contact",component:ContactUsComponent},
  {path:"Magazine",component:MagazineListComponent},
  {path:"Books",component:BookListComponent},
  {path:"UPSC_Course",component:UPSCCoursesComponent},
  {path:"StatePCS",component:StatePCSCoursesComponent},
  {path:"TestSeries",component:TestSeriesComponent},
  {path:"GSMainsSyllabus",component:UPSCGSMainsSyllabusComponent},
  {path:"PrelimsGSSyllabus",component:UPSCPrelimsGSSyllabusComponent},
  {path:"CurrentAffairs",component:CurrentAffairsComponent},
  {path:"ClassNotes",component:ClassNotesComponent},
 {path:"get-socialmedia",component:GetSocialMediaComponent},
  {path:"EthicsBook",component:BookContentEthicsComponent },
  {path : "EnvironmentBook", component:BookContentEnvironmentComponent},
  {path : "POLITYBook", component:BookContentPOLITYComponent},
  {path : "Economics", component:BookContentEconomyComponent},
  {path : "NIAS_TalksAndInterview", component:TalksAndInterviewComponent},
  {path:"get-category", component:GetCategoryComponent},
 {path : "get-BranchList",component:GetBranchComponent},
{path : "InsertSocialmedia",component:InsertSocialMediaComponent},
// {path:"admin",component:AdminComponent},
//  {path:"login",component:LogInComponent},
  {path : "get-subcategory",component:GetSubCategoryComponent },
  {path : "NIAS_Geography", component:BookContentGeographyComponent},
  {path : "NIAS_Governance", component:BookContentGovernanceComponent},
  {path : "NIAS_History", component:BookContentHistoryComponent},
  {path : "NIAS_IndianIR", component:BookContentIndianIRComponent},
  {path : "NIAS_IndianSecurity", component:BookContentIndianSecurityComponent},
  {path : "NIAS_IndianSociety", component:BookContentIndianSocietyComponent},
  {path : "NIAS_PaperIII", component:BookContentPaperIIIComponent},
  {path : "NIAS_ScienceTech", component:BookContentScienceTechComponent},
  {path : "NIAS_SOCIALJUSTICE", component:BookContentSOCIALJUSTICEComponent},
  {path : "NIAS_Sociology", component:BookContentSociologyComponent},
  {path : "NIAS_AgricultureEconomic", component:BookContentAgricultureEconomicComponent},
  {path : "NIAS_ModernIndia", component:BookContentModernIndiaComponent},
  {path : "NIAS_SpecialClasses", component:SpecialClassesComponent},
  {path : "NIAS_CourseFee", component:NIASCourseFeeStrutureComponent},
  {path : "NIAS_TestYourSelf", component:TestYourSelfComponent},
  {path : "InsertBatchInfo", component:InsertBatchDetailsComponent},
  {path :"insert-category",component:InsertCategoryComponent},
  {path :"get-batchdetails",component:GetBatchDetailsComponent},
  {path:"insert-banner",component:InsertBannerComponent},
  {path:"insert-course",component:InsertCourceMasterComponent},
  {path:"get-course",component:GetCourceMasterComponent},
  {path:"insert-branch",component:InsertBranchComponent},
  {path:"insert-nirmanresult",component:InsertNirmanresultMasterComponent},
  {path:"get-nirmanresult",component:GetNirmanresultMasterComponent},
  // { path: '', redirectTo: '/', pathMatch:'full' }
  {path:"insert-current",component:InsertCurrentAffairsComponent},
  {path:"get-current",component:GetCurrentAffairsComponent},
  {path:"insert-batchtopicdetail",component:InsertBatchTopicDetailsComponent},
  {path:"get-batchtopicdetail",component:GetBatchTopicDetailsComponent},
  {path:"insert-subcategory",component:InsertSubCategoryComponent},
  {path:"get-facultyMaster",component:GetFacultyMasterComponent},
  {path:"insert-facultyMaster",component:InsertFacultyMasterComponent},
  {path:"get-VideoLecture",component:GetVideoLectureComponent},
  {path:"insert-VideoLecture",component:InsertVideoLectureComponent},
  {path:"get-studentmaster",component:GetStudentmasterComponent},
  {path:"insert-studentmaster",component:InsertStudentmasterComponent},
  {path:"get-usermaster",component:GetUsermasterComponent},
  {path:"insert-usermaster",component:InsertUsermasterComponent},
  {path:"get-imagevedio",component:GetImagevediosComponent},
  {path:"insert-imagevedio",component:InsertImagevediosComponent},
  {path:"get-notification",component:GetNotifictionmasterComponent},
  {path:"insert-notification",component:InsertNotifictionmasterComponent},
  {path: "TopersAnswerCopyList",component:TopersAnswerCopyListComponent},
  {path: "TopersAnswerCopyForIndividual",component:TopersAnswerCopyForIndividualComponent},
  { path:"UpdateBatchDetails",component:UpdateBatchDetailsComponent},

  { path:"PrintedMaterialList",component:PrintedMaterialListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
