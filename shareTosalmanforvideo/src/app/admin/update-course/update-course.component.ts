import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      deleted:['']
    });
  }

  ngOnInit(): void {
    this.loadCourseData();
  }

  loadCourseData(): void {
    const id = this.route.snapshot.params['id'];
    this.api.getCourseDetailsById(id).subscribe((course: any) => {
      this.courseForm.patchValue({
        courseName: course.courseName,
        deleted:course.deleted
      });
    });
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      const updatedCourse = this.courseForm.value;
      const id = this.route.snapshot.params['id'];
      this.api.updateCourse(id, updatedCourse).subscribe(
        () => {
          // Swal.fire('Success', 'Course updated successfully!', 'success');
          Swal.fire({
            title: 'Course updated successfully!',
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
          this.router.navigate(['/admin/all-subject']);
        },
        (error:any) => {
          console.log(error);
          Swal.fire({
            title: error?.message,
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
          // Swal.fire('Error', 'An error occurred while updating the course.', 'error');
          
        }
      );
    }else{
      Swal.fire({
        title: 'Form is invalid',
        width: 600,
        padding: '3em',
        color: 'white',
        background: 'grey',
        confirmButtonColor: '#1a2b39'
      });
    }
  }

  get courseName() {
    return this.courseForm.get('courseName');
  }
}
