import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

// import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  changePasswordForm: FormGroup;
  passwordMismatch: boolean = false;

  constructor(private fb: FormBuilder, private api:ApiService,private router:Router ) {
    this.changePasswordForm = this.fb.group({
      username: ['', Validators.required],
      otp: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {
 
    
  }
  onSubmit() {
    if (this.changePasswordForm.valid) {
      if (this.changePasswordForm.value.newPassword === this.changePasswordForm.value.confirmPassword) {
        console.log(this.changePasswordForm.value);

        let data = {
          username: this.changePasswordForm.value.username.trim(),
          otp: this.changePasswordForm.value.otp.trim(),
          newPassword: this.changePasswordForm.value.newPassword.trim()
        };
        
        this.api.generatePassword(data).subscribe((successResponse)=>{
          console.log(successResponse)
          this.router.navigate(['auth'])
          // alert("Success Generate Password")
          Swal.fire({
            title: "Successfully Generate Password",
            width: 600,
            padding: "3em",
            color: "white",
            background: "grey ",
            confirmButtonColor: "#1a2b39"
           
          });
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
        // Call the service to change the password here
      } else {
        this.passwordMismatch = true;
      }
    }
  }

  navigateToLogin(){
    this.router.navigate(['/auth'])
  }
}
