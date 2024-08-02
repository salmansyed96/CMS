import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder, private api:ApiService, private router:Router) {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      isDeleted: [false, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);

      this.api.addCourse(this.courseForm.value).subscribe((successResponse)=>{
        console.log(successResponse);
        // alert("SuccessFully Add the Course ")
        Swal.fire({
          title: "Successfully Add the Course ",
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey ",
          confirmButtonColor: "#1a2b39"
         
        });
        this.router.navigate(['admin/all-subject'])

      },((errorResponse)=>{
        const errorMessage = errorResponse?.error?.message ;
        console.log(errorMessage)
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
          confirmButtonColor: "#1a2b39"
         
        });
      }))
    } else {
      console.log('Form is not valid');
      Swal.fire({
        title: "Form is not valid ",
        width: 600,
        padding: "3em",
        color: "white",
        background: "grey ",
        confirmButtonColor: "#1a2b39"
       
      });
      
    }
  }

}
