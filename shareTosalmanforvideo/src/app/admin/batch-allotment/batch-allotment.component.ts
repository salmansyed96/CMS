import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-batch-allotment',
  templateUrl: './batch-allotment.component.html',
  styleUrls: ['./batch-allotment.component.scss']
})
export class BatchAllotmentComponent {
  public currentDate: Date = new Date();
  public formattedDate: string = `${this.currentDate.getFullYear()}-${(this.currentDate.getMonth() + 1).toString().padStart(2, '0')}-${this.currentDate.getDate().toString().padStart(2, '0')}`;
  public futureDate: Date = new Date(
    this.currentDate.getFullYear(),
    this.currentDate.getMonth() + 3,
    this.currentDate.getDate()
  );
  
  public formatedDate: string = `${this.futureDate.getFullYear()}-${(
    this.futureDate.getMonth() + 1
  ).toString().padStart(2, '0')}-${this.futureDate
    .getDate()
    .toString()
    .padStart(2, '0')}`;
  
  // console.log(this.formatedDate); /
  scheduleForm: FormGroup;
  // currentDate:any=new Date();
  subjects :any
  // = [
  //   { id: 768, name: 'Java' },
  //   { id: 769, name: 'Python' },
  //   { id: 770, name: 'JavaScript' }
  // ];
  teachers :any
  // = [
  //   { id: 678, name: 'Mr. Smith' },
  //   { id: 679, name: 'Ms. Johnson' },
  //   { id: 680, name: 'Dr. Brown' }
  // ];

  constructor(private fb: FormBuilder,private api:ApiService, private router:Router) {
    this.scheduleForm = this.fb.group({
      subject: ['', Validators.required],
      teacher: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.api.getCourse().subscribe((successResponse)=>{
console.log(successResponse,"course content")
this.subjects = successResponse
    },(errorResponse)=>{
console.log(errorResponse);
    })
    this.api.getTeacher().subscribe((successResponse)=>{
console.log(successResponse,"teacher content")
this.teachers = successResponse
    },(errorResponse)=>{
console.log(errorResponse);
    })
  
  
  }

  onSubmit(): void {
    if (this.scheduleForm.valid) {
      // console.log(this.scheduleForm.value);

      let data={
        subject:{
          "id":+ this.scheduleForm.value.subject
        } ,
        teacher:{
          "id":+this.scheduleForm.value.teacher
        } ,
        startDate: this.scheduleForm.value.startDate,
  endDate: this.scheduleForm.value.endDate
      }
      let jsonData = JSON.stringify(data);
      console.log(jsonData);
// console.log(data)
      this.api.batchAllotment(jsonData).subscribe((successResponse)=>{
        console.log(successResponse);
        // alert("successfully Allot the batch");
        Swal.fire({
          title: "Successfully Batch Alloted ! ",
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey ",
          confirmButtonColor: "#1a2b39"
         
        });

        this.router.navigate(['admin'])

      },((errorResponse)=>{
        console.log(errorResponse.message)
        const errorMessage = errorResponse?.message ;
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
      Swal.fire({
        title: "Form is not valid",
        width: 600,
        padding: "3em",
        color: "white",
        background: "grey",
        confirmButtonColor: "#1a2b39"
       
      });
      console.log('Form is not valid');
    }
  }
}
