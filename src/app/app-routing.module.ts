import { Component, OnInit, NgModule } from '@angular/core';

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

const routes: Routes = [
  {path:"",component:NIASHomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"adminlink",component:AdminlinkComponent},
  {path:"login",component:LogInComponent},
  // {path:"Enquiry",component:GetEnquiryComponent},
  {path:"InsertEnquiry",component:InsertEnquiryComponent},
  {path:"getEnquiry",component:GetEnquiryComponent},
  {path:"registration",component: RegistrationComponent},
  {path:"Aboutus",component:AboutUsComponent},
  {path:"Gallery",component:GalleryNIASComponent},
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
  {path:"banner",component:InsertBannerComponent},
  // {path:"getbanner",component:GetBannerComponentonent},
  {path:"EthicsBook",component:BookContentEthicsComponent },
  {path : "EnvironmentBook", component:BookContentEnvironmentComponent},
  {path : "POLITYBook", component:BookContentPOLITYComponent},
  {path : "Economics", component:BookContentEconomyComponent},

 // {path : "BranchList",component:GetBranchComponent},
  //{path : "InsertBranch",component:InsertBranchComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LogInComponent},
  {path:"getchat",component:GetchatComponent},

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
  
  
  // { path: '', redirectTo: '/', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
