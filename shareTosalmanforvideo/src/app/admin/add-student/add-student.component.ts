// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
// import { Router } from '@angular/router';
// import { ApiService } from 'src/app/services/api/api.service';
// import Swal from 'sweetalert2';
// // import { differenceInYears } from 'date-fns';

// @Component({
//   selector: 'app-add-student',
//   templateUrl: './add-student.component.html',
//   styleUrls: ['./add-student.component.scss']
// })
// export class AddStudentComponent {
//   registrationForm: FormGroup;
  
//   public currentDate: Date = new Date();
// public minimumDate: Date = new Date(
//   this.currentDate.getFullYear() - 13,
//   this.currentDate.getMonth(),
//   this.currentDate.getDate()
// );
// public formattedDate: string = `${this.minimumDate.getFullYear()}-${(
//   this.minimumDate.getMonth() + 1
// ).toString().padStart(2, '0')}-${this.minimumDate
//   .getDate()
//   .toString()
//   .padStart(2, '0')}`;
//   constructor(private fb: FormBuilder , private api:ApiService, private router:Router) {
//     // console.log(this.currentDate)
//     this.registrationForm = this.fb.group({
//       fullName: ['', Validators.required],
//       dob: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.email]],
//       mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
//       adharNo: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]]
//     });
//   }

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.registrationForm.valid) {
//       console.log(this.registrationForm.value);
//       this.api.addStudent(this.registrationForm.value).subscribe((successResponse)=>
//       {
//         console.log(successResponse)
//         // alert("successfully Add the Student ")
//         Swal.fire({
//           title: "Successfully Add the Student ",
//           width: 600,
//           padding: "3em",
//           color: "white",
//           background: "grey ",
//           confirmButtonColor: "#1a2b39"
         
//         });
//         this.router.navigate(['admin'])
//       },(errorResponse)=>{
//         console.log(errorResponse)
//         const errorMessage = errorResponse?.error?.message ;
//         Swal.fire({
//           title: errorMessage,
//           width: 600,
//           padding: "3em",
//           color: "white",
//           background: "grey",
//           confirmButtonColor: "#1a2b39"
         
//         });
//       })
//     } else {
//       console.log('Form is not valid');
//     }
//   }

//   // ageValidator(control: AbstractControl): ValidationErrors | null {
//   //   const dob = new Date(control.value);
//   //   // const age = differenceInYears(new Date(), dob);
//   //   // return age >= 15 ? null : { ageInvalid: true };
//   // }

//   get fullName() { return this.registrationForm.get('fullName'); }
//   get dob() { return this.registrationForm.get('dob'); }
//   get email() { return this.registrationForm.get('email'); }
//   get mobileNo() { return this.registrationForm.get('mobileNo'); }
//   get adharNo() { return this.registrationForm.get('adharNo'); }


//   verifyEmail(email:any){
//     console.log(email.value);
//     this.api.getEmailVerifyByEmail(email.value).subscribe((successResponse)=>{
// console.log(successResponse)
//     },((errorResponse)=>{
//       // console.log(errorResponse)
//       const errorMessage = errorResponse?.error?.message ;
//       Swal.fire({
//         title: errorMessage,
//         width: 600,
//         padding: "3em",
//         color: "white",
//         background: "grey",
//         confirmButtonColor: "#1a2b39"
       
//       });
//       this.registrationForm.controls?.['email'].setValue('');
//     }))
//   }
//   verifyAdhar(aadhar:any){
//     console.log(aadhar.value);
//     this.api.getAadharVerifyByEmail(aadhar.value).subscribe((successResponse)=>{
// console.log(successResponse)
//     },((errorResponse)=>{
//       // console.log(errorResponse)
//       const errorMessage = errorResponse?.error?.message ;
//       Swal.fire({
//         title: errorMessage,
//         width: 600,
//         padding: "3em",
//         color: "white",
//         background: "grey",
//         confirmButtonColor: "#1a2b39"
       
//       });
//       this.registrationForm.controls?.['adharNo'].setValue('');
//     }))
//   }


// }



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  registrationForm: FormGroup;
  isLoading = false; // Variable to track the loader state

  public currentDate: Date = new Date();
  public minimumDate: Date = new Date(
    this.currentDate.getFullYear() - 13,
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
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      adharNo: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.isLoading = true; // Start the loader
      console.log(this.registrationForm.value);
      this.api.addStudent(this.registrationForm.value).subscribe(
        (successResponse) => {
          this.isLoading = false; // Stop the loader
          console.log(successResponse);
          Swal.fire({
            title: 'Successfully Added the Student',
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
          this.router.navigate(['admin/all-student']);
        },
        (errorResponse) => {
          this.isLoading = false; // Stop the loader
          console.log(errorResponse);
          const errorMessage = errorResponse?.error?.message;
          Swal.fire({
            title: errorMessage,
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  get fullName() { return this.registrationForm.get('fullName'); }
  get dob() { return this.registrationForm.get('dob'); }
  get email() { return this.registrationForm.get('email'); }
  get mobileNo() { return this.registrationForm.get('mobileNo'); }
  get adharNo() { return this.registrationForm.get('adharNo'); }

  verifyEmail(email: any) {
    console.log(email.value);
    this.api.getEmailVerifyByEmail(email.value).subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) => {
        console.log(errorResponse);
        const errorMessage = errorResponse?.error?.message;
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: '3em',
          color: 'white',
          background: 'grey',
          confirmButtonColor: '#1a2b39'
        });
        this.registrationForm.controls?.['email'].setValue('');
      }
    );
  }

  verifyAdhar(aadhar: any) {
    console.log(aadhar.value);
    this.api.getAadharVerifyByEmail(aadhar.value).subscribe(
      (successResponse) => {
        console.log(successResponse);
      },
      (errorResponse) => {
        const errorMessage = errorResponse?.error?.message;
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: '3em',
          color: 'white',
          background: 'grey',
          confirmButtonColor: '#1a2b39'
        });
        this.registrationForm.controls?.['adharNo'].setValue('');
      }
    );
  }
}
