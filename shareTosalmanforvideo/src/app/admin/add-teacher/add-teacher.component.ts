import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {
  teacherForm: FormGroup;
  isLoading = false; // Variable to track the loader state

  public currentDate: Date = new Date();
  public minimumDate: Date = new Date(
    this.currentDate.getFullYear() - 18,
    this.currentDate.getMonth(),
    this.currentDate.getDate()
  );
  public formattedDate: string = `${this.minimumDate.getFullYear()}-${(
    this.minimumDate.getMonth() + 1
  ).toString().padStart(2, '0')}-${this.minimumDate
    .getDate()
    .toString()
    .padStart(2, '0')}`;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.teacherForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      isDeleted: [false],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.teacherForm.valid) {
      this.isLoading = true; // Start the loader
      console.log(this.teacherForm.value);

      this.api.addTeacher(this.teacherForm.value).subscribe(
        (successResponse) => {
          this.isLoading = false; // Stop the loader
          Swal.fire({
            title: "Successfully Added the Teacher",
            width: 600,
            padding: "3em",
            color: "white",
            background: "grey",
            confirmButtonColor: "#1a2b39"
          });
          this.router.navigate(['admin/staff']);
        },
        (errorResponse) => {
          this.isLoading = false; // Stop the loader
          const errorMessage = errorResponse?.message;
          Swal.fire({
            title: errorMessage,
            width: 600,
            padding: "3em",
            color: "white",
            background: "grey",
            confirmButtonColor: "#1a2b39"
          });
        }
      );
    } else {
      Swal.fire({
        title: "Form is not valid",
        width: 600,
        padding: "3em",
        color: "white",
        background: "grey",
        confirmButtonColor: "#1a2b39"
      });
    }
  }

  get firstName() { return this.teacherForm.get('firstName'); }
  get lastName() { return this.teacherForm.get('lastName'); }
  get dob() { return this.teacherForm.get('dob'); }
  get mobileNumber() { return this.teacherForm.get('mobileNumber'); }
  get email() { return this.teacherForm.get('email'); }
  get address() { return this.teacherForm.get('address'); }

  verifyEmail(email: any) {
    this.api.getEmailVerifyByEmail(email.value).subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) => {
        const errorMessage = errorResponse?.error?.message;
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
          confirmButtonColor: "#1a2b39"
        });
        this.teacherForm.controls?.['email'].setValue('');
      }
    );
  }
}
