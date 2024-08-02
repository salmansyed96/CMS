import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDasboardComponent } from '../admin-dasboard/admin-dasboard.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { AdminNavbarComponent } from '../admin-navbar/admin-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddStudentComponent } from '../add-student/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AddTeacherComponent } from '../add-teacher/add-teacher.component';
import { BatchAllotmentComponent } from '../batch-allotment/batch-allotment.component';
import { StudentAllotmentComponent } from '../student-allotment/student-allotment.component';
import { StaffComponent } from '../staff/staff.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AllStudentComponent } from '../all-student/all-student.component';
import { AllSubjectComponent } from '../all-subject/all-subject.component';
import { AllBatchComponent } from '../all-batch/all-batch.component';
import { AllStudentAllotedComponent } from '../all-student-alloted/all-student-alloted.component';
// import { AllSubjectComponent } from '../all-subject/all-subject.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
// import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { QRCodeModule  } from 'angularx-qrcode';
import { QrCodeComponent } from '../qr-code/qr-code.component';
import { StudentIdComponent } from '../student-id/student-id.component';
import { BatchByIdComponent } from '../batch-by-id/batch-by-id.component';
import { StudentAllotedByIdComponent } from '../student-alloted-by-id/student-alloted-by-id.component';
import { UpdateStaffComponent } from '../update-staff/update-staff.component';
import { AdminUpdateStudentComponent } from '../admin-update-student/admin-update-student.component';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { UpdateBatchAllotedComponent } from '../update-batch-alloted/update-batch-alloted.component';
import { UpdateStudentAllotedComponent } from '../update-student-alloted/update-student-alloted.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
@NgModule({
  declarations: [
    AdminComponent,
    AdminDasboardComponent,
    AdminSidebarComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
    AddStudentComponent,
    AddCourseComponent,
    AddTeacherComponent,
    BatchAllotmentComponent,
    StudentAllotmentComponent,
    StaffComponent,
    AllStudentComponent,
    AllSubjectComponent,
    AllBatchComponent,
    AllStudentAllotedComponent,
    QrCodeComponent,
    StudentIdComponent,
    BatchByIdComponent,
    StudentAllotedByIdComponent,
    UpdateStaffComponent,
    AdminUpdateStudentComponent,
    UpdateCourseComponent,
    UpdateBatchAllotedComponent,
    UpdateStudentAllotedComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    // MatCardModule,
    MatExpansionModule,
    QRCodeModule,
    FormsModule

  ]
})
export class AdminModule { }
