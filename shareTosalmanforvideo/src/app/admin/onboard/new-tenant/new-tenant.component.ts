import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-new-tenant',
  templateUrl: './new-tenant.component.html',
  styleUrls: ['./new-tenant.component.scss']
})
export class NewTenantComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private api :ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [[], Validators.required] // Set default value and make it required
    });
  }

  onSubmit() {
    // Handle form submission
    if (this.signupForm.valid) {
      
      const formData = {
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        role: [this.signupForm.value.role]
      };
      console.log(formData);

      this.api.signUp(formData).subscribe((successResponse)=>{
console.log(successResponse)
      },((errorResponse)=>{
        console.log(errorResponse)
      }))
      // Here you can send the form data to your backend API
    }
  }

}
