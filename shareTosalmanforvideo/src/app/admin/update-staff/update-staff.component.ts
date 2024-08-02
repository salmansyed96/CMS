import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.scss']
})
export class UpdateStaffComponent implements OnInit {
  staffForm!: FormGroup;
  staffId!: number;

  id!:number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: ApiService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.staffId = this.activateRoute.snapshot.params['id'];
    this.initForm();
    this.loadStaffData(this.staffId);
  }

  initForm() {
    this.staffForm = this.fb.group({
      teacherId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{10}$/)
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      deleted: [false]
    });
  }

  loadStaffData(id: number) {
    this.api.getTeacherByUserName(id).subscribe(
      (response: any) => {
        console.log('Staff data:', response);
        this.id=response.id
        this.staffForm.patchValue(response); // Patching the response data to the form
      },
      (error) => {
        console.error('Error fetching staff data:', error);
      }
    );
  }

  onSubmit() {
    console.log(this.staffForm.value);
    if (this.staffForm.valid) {
      const updatedStaffData = this.staffForm.value;

      this.api.updateTeacher( updatedStaffData,this.id).subscribe(
        (response:any) => {
          console.log('Staff updated successfully:', response);
          Swal.fire({
            title: 'Successfully Updated',
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
          // Swal.fire({
          //   title: 'Successfully Updated',
          //   text: 'The staff information has been updated.',
          //   icon: 'success',
          //   confirmButtonColor: '#1a2b39'
          // });
          this.router.navigate(['/admin/staff']); // Navigate to staff list or another page
        },
        (error:any) => {
          console.error('Error updating staff:', error);
          const errorMessage = error?.error?.message || 'An error occurred. Please try again.';
          // Swal.fire({
          //   title: 'Error',
          //   text: errorMessage,
          //   icon: 'error',
          //   confirmButtonColor: '#1a2b39'
          // });
          // const errorMessage = errorResponse?.error?.message ;
          console.log(errorMessage)
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
        title: 'Invalid Form',
        text: 'Please fill out all required fields correctly.',
        icon: 'warning',
        confirmButtonColor: '#1a2b39'
      });
    
      console.warn('Form is invalid');
    }
  }
}
