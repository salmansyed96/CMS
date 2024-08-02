import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NewTenantComponent } from '../onboard/new-tenant/new-tenant.component';
import { AdminDasboardComponent } from '../admin-dasboard/admin-dasboard.component';
import { AddStudentComponent } from '../add-student/add-student.component';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';
import { BatchAllotmentComponent } from '../batch-allotment/batch-allotment.component';
import { StudentAllotmentComponent } from '../student-allotment/student-allotment.component';
import { StaffComponent } from '../staff/staff.component';
import { AllStudentComponent } from '../all-student/all-student.component';
import { AllSubjectComponent } from '../all-subject/all-subject.component';
import { AllBatchComponent } from '../all-batch/all-batch.component';
import { AllStudentAllotedComponent } from '../all-student-alloted/all-student-alloted.component';
import { QrCodeComponent } from '../qr-code/qr-code.component';
import { StaffByIdComponent } from '../staff-by-id/staff-by-id.component';
import { StudentIdComponent } from '../student-id/student-id.component';
import { BatchByIdComponent } from '../batch-by-id/batch-by-id.component';
import { StudentAllotedByIdComponent } from '../student-alloted-by-id/student-alloted-by-id.component';
import { UpdateStaffComponent } from '../update-staff/update-staff.component';
import { AdminUpdateStudentComponent } from '../admin-update-student/admin-update-student.component';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { UpdateBatchAllotedComponent } from '../update-batch-alloted/update-batch-alloted.component';
import { UpdateStudentAllotedComponent } from '../update-student-alloted/update-student-alloted.component';
import { AuthGuard } from 'src/app/auth.guard';
import { ContactUsComponent } from '../contact-us/contact-us.component';

const routes: Routes = [{ path: '', component: AdminDasboardComponent  },
  {
    path: 'add-student',
    component: AddStudentComponent,
    
  },{
    path:"add-course",
    component: AddCourseComponent
  },
  {
    path:"add-teacher",
    component: AddTeacherComponent
  },
  {
    path:"batch-allotment",
    component: BatchAllotmentComponent
  },
  {
    path:"student-allotment",
    component: StudentAllotmentComponent
  },
  {
    path:"staff",
    component: StaffComponent
  },
  {
    path:"all-student",
    component: AllStudentComponent
  },
  {
    path:"conatct-us",
    component:ContactUsComponent
  },
  {
    path:"all-subject",
    component: AllSubjectComponent
  },
  {
    path:"all-batch",
    component: AllBatchComponent
  },
  {
    path:"all-student-alloted",
    component: AllStudentAllotedComponent
  },
  {
    path:"qr-code",
    component: QrCodeComponent
  },
  //get by username/id

  {
    path:"staff/:id",
    component: StaffByIdComponent
  },
  {
    path:"student/:id",
    component: StudentIdComponent
  },
  {
    path:"batch/:id",
    component: BatchByIdComponent
  },
  {
    path:"studentalloted/:id",
    component: StudentAllotedByIdComponent
  },
  //update routing
  {
    path:"update-staff/:id",
    component: UpdateStaffComponent
  },
  {
    path:"admin-update-student/:id",
    component: AdminUpdateStudentComponent
  },
  {
    path:"update-course/:id",
    component: UpdateCourseComponent
  },
  {
    path:"update-batch-allotment/:id",
    component: UpdateBatchAllotedComponent,
    
  },
  {
    path:"update-student-allotment/:id",
    component: UpdateStudentAllotedComponent,
    
  }


  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
