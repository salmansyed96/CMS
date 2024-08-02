import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  emailForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private api:ApiService) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.emailForm.valid) {
     
      
     
      // const jsonData = JSON.stringify(data, null, 2);
      // console.log(jsonData);

      // const formFileData = new FormData();
      // formFileData.append('email', JSON.stringify(  this.emailForm.value.email))
      this.api.forgetPassword(this.emailForm.value).subscribe((successResponse)=>{
console.log(successResponse)
Swal.fire({
  title: 'SuccessFully Verified Email',
  width: 600,
  padding: '3em',
  color: 'white',
  background: 'grey',
  confirmButtonColor: '#1a2b39'
});
this.router.navigate(['auth/reset-password'])
      },((errorResponse)=>{
        console.log(errorResponse);
        const errorMessage = errorResponse?.error?.message || 'An error occurred';
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: '3em',
          color: 'white',
          background: 'grey',
          confirmButtonColor: '#1a2b39'
        });
      }))
    
    } else {
      console.log('Form is not valid');
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

  get email() { return this.emailForm.get('email'); }

}
