import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-allotment',
  templateUrl: './student-allotment.component.html',
  styleUrls: ['./student-allotment.component.scss']
})
export class StudentAllotmentComponent {
  batchAllotmentForm: FormGroup;
  batches:any
  students :any

  constructor(private fb: FormBuilder,private api:ApiService,private router:Router) {
    this.batchAllotmentForm = this.fb.group({
      batchAllotment: ['', Validators.required],
      student: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.api.getBatches().subscribe((successResponse)=>{
console.log(successResponse)
this.batches=successResponse;

    },((errorResponse)=>{
      console.log(errorResponse.message);
    }))
    this.api.getStudent().subscribe((successResponse)=>{
console.log(successResponse)
this.students=successResponse
    },((errorResponse)=>{
      console.log(errorResponse.message);
    }))
  }

  onSubmit(): void {
    if (this.batchAllotmentForm.valid) {
      const data = {
        batchAllotment:{
          id: +this.batchAllotmentForm.value.batchAllotment
        },
        student:{
          id: +this.batchAllotmentForm.value.student
        }
      };


      const jsonData = JSON.stringify(data, null, 2);
      console.log(jsonData);
      this.api.studentAllotment(jsonData).subscribe((successResponse)=>{
        console.log(successResponse);
        this.router.navigate(['admin'])
        // alert("success Allot the student")
        
        
        Swal.fire({
          title: "SuccessFully Alloted The student",
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
          confirmButtonColor: "#1a2b39"
         
        });
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
        title: "Form is not valid",
        width: 600,
        padding: "3em",
        color: "white",
        background: "grey",
        confirmButtonColor: "#1a2b39"
       
      });
    }
  }

  get batchAllotment() { return this.batchAllotmentForm.get('batchAllotment'); }
  get student() { return this.batchAllotmentForm.get('student'); }

}
