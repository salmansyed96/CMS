import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent {
  passwordResetForm: FormGroup;

  constructor(private fb: FormBuilder,private api:ApiService,private router:Router) {
    this.passwordResetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      otp: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const newPassword = control.get('newPassword');
    const confirmPassword = control.get('confirmPassword');
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.passwordResetForm.valid) {
      const data = {
        email: this.passwordResetForm.value.email,
        otp: this.passwordResetForm.value.otp,
        newPassword: this.passwordResetForm.value.newPassword
      };

      const jsonData = JSON.stringify(data, null, 2);
      console.log(jsonData);
      this.api.resetPassword(jsonData).subscribe((successResponse)=>{
        // console.log(successResponse)
        Swal.fire({
          title: "Successfully Generate New Password",
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey ",
          confirmButtonColor: "#1a2b39"
         
        });
        this.router.navigate(['auth'])
      },((errorResponse)=>{
        console.log(errorResponse)
        // alert(errorResponse.error.message)
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

  get email() { return this.passwordResetForm.get('email'); }
  get otp() { return this.passwordResetForm.get('otp'); }
  get newPassword() { return this.passwordResetForm.get('newPassword'); }
  get confirmPassword() { return this.passwordResetForm.get('confirmPassword'); }

}
