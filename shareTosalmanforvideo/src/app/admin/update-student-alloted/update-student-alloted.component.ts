import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-student-alloted',
  templateUrl: './update-student-alloted.component.html',
  styleUrls: ['./update-student-alloted.component.scss']
})
export class UpdateStudentAllotedComponent implements OnInit {
  studentAllotmentForm: FormGroup;
  batchAllotments: any[] = []; // Data for batch allotments
  students: any[] = []; // Data for students

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.studentAllotmentForm = this.fb.group({
      batchAllotment: ['', Validators.required],
      student: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBatchAllotments();
    this.loadStudents();
    this.loadStudentAllotmentDetails();
  }

  loadBatchAllotments(): void {
    this.api.getBatches().subscribe((batchAllotments: any) => {
      console.log(batchAllotments)
      this.batchAllotments = batchAllotments;
      this.setDefaultBatchAllotment();
    });
  }

  loadStudents(): void {
    this.api.getStudent().subscribe((students: any) => {
      console.log(students)
      this.students = students;
      this.setDefaultStudent();
    });
  }

  setDefaultBatchAllotment(): void {
    const defaultBatchAllotment = this.batchAllotments.find(batch => batch.isDefault);
    if (defaultBatchAllotment) {
      this.studentAllotmentForm.get('batchAllotment')?.setValue(defaultBatchAllotment.id);
    }
  }

  setDefaultStudent(): void {
    const defaultStudent = this.students.find(student => student.isDefault);
    if (defaultStudent) {
      this.studentAllotmentForm.get('student')?.setValue(defaultStudent.id);
    }
  }

  loadStudentAllotmentDetails(): void {
    const id = this.activateRoute.snapshot.params['id'];
    if (id) {
      this.api.getStudentAllotedDetailsById(id).subscribe((allotment: any) => {
        this.studentAllotmentForm.patchValue({
          batchAllotment: allotment.batchAllotment.id,
          student: allotment.student.id
        });
      });
    }
  }

  onSubmit(): void {
    if (this.studentAllotmentForm.valid) {
      const formData = this.studentAllotmentForm.value;
      const data = {
        batchAllotment: { id: formData.batchAllotment },
        student: { id: formData.student }
      };

      const id = this.activateRoute.snapshot.params['id'];
      console.log(data);
      this.api.updateStudentAllotment(id, data).subscribe(
        () => {
          Swal.fire({
            title: 'Success',
            width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
            text: 'Student allotment updated successfully!',
            icon: 'success',
            confirmButtonColor: '#1a2b39'
          });
          this.router.navigate(['/admin/all-student-alloted']);
        },
        (error:any) => {
          Swal.fire({
            title: 'Error',
            width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
            text: 'An error occurred while updating the student allotment.',
            icon: 'error',
            confirmButtonColor: '#1a2b39'
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Invalid Form',
        text: 'Please correct the errors in the form.',
        icon: 'error',
        confirmButtonColor: '#1a2b39'
      });
    }
  }
}
