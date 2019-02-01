import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetEnquiryComponent } from './Component/enquirycomponent/get-enquiry/get-enquiry.component';
import { InsertEnquiryComponent } from './Component/enquirycomponent/insert-enquiry/insert-enquiry.component';
import { LogInComponent } from './component/log-in/log-in/log-in.component';
import { RegistrationComponent } from './component/registration/registration/registration.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { NIASHomeComponent } from './Component/niashome/niashome.component';
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
import { AdminComponent } from './component/admin/admin/admin.component';
import { InsertBranchComponent } from './component/BranchMaster/insert-branch/insert-branch.component';
import { GetBranchComponent } from './component/BranchMaster/get-branch/get-branch.component';
import { GetBannerComponent } from './component/Banner/get-banner/get-banner.component';
const routes: Routes = [
  {path:"",component:NIASHomeComponent},
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
  {path:"branch",component:InsertBranchComponent},
  {path:"getbranch",component:GetBranchComponent},
  {path:"getbanner",component:GetBannerComponent}

  // { path: '', redirectTo: '/', pathMatch:'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
