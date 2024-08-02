import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {
  showTeacherOptions: boolean = false;
  showStudentOptions: boolean = false;
  showCourseOptions: boolean = false;
  showBatchOptions: boolean = false;

  constructor(private router: Router) {}

  toggleTeacherOptions() {
    this.showTeacherOptions = !this.showTeacherOptions;
  }

  toggleStudentOptions() {
    this.showStudentOptions = !this.showStudentOptions;
  }

  toggleCourseOptions() {
    this.showCourseOptions = !this.showCourseOptions;
  }

  toggleBatchOptions() {
    this.showBatchOptions = !this.showBatchOptions;
  }

  navigateToTeacherForm() {
    this.router.navigate(['admin/add-teacher']);
  }

  navigateAllTeacher() {
    this.router.navigate(['admin/staff']);
  }

  navigateToStudentForm() {
    this.router.navigate(['admin/add-student']);
  }

  navigateAllStudent() {
    this.router.navigate(['admin/all-student']);
  }

  navigateToCourseForm() {
    this.router.navigate(['admin/add-course']);
  }

  navigateAllSubject() {
    this.router.navigate(['admin/all-subject']);
  }

  navigateToBatchAllotmentForm() {
    this.router.navigate(['admin/batch-allotment']);
  }

  navigateAllBatch() {
    this.router.navigate(['admin/all-batch']);
  }

  navigateStudentAllotted() {
    this.router.navigate(['admin/all-student-alloted']);
  }
  navigateStudentAllottedForm() {
    this.router.navigate(['admin/student-allotment']);
  }
}
