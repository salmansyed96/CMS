import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private api:ApiService, private router:Router) {
    this.loginForm = this.fb.group({
      employeeID: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit(): void {
    
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      localStorage.setItem('role', this.loginForm.value.role)

      let data = {
        username: this.loginForm.value.employeeID.trim(),
        password: this.loginForm.value.password.trim(),
        role: [this.loginForm.value.role.trim()]
      };
      

      this.api.login(data).subscribe((successResponse:any)=>{
        console.log(successResponse)
        // alert(" Login Successfully ")
        Swal.fire({
  title: "Successfully logged In ",
  width: 600,
  padding: "3em",
  color: "white",
  background: "grey ",
  confirmButtonColor: "#1a2b39"
 
});
        let username=successResponse.username
        let token=successResponse.token
        let expieryTime=successResponse.expieryTime
        // console.log(username)
        localStorage.setItem('access_token',token)
        localStorage.setItem('expieryTime',expieryTime)
        localStorage.setItem('username',username)


        let role=localStorage.getItem('role')
        console.log(role)
        if(role=="ROLE_ADMIN"){
          this.router.navigate(['admin'])

        }else if (role=="ROLE_STUDENT"){
          let username=localStorage.getItem('username');
          console.log(username);
          this.api.getStudentByUserName(username).subscribe((successResponse:any)=>{
            console.log(successResponse)
            console.log(successResponse.formFillOrNot)
            if(successResponse.formFillOrNot==false ){
              this.router.navigate(['student-initial-update'])

            }else if(successResponse.approvalStatus==false){
              this.router.navigate(['auth/student-waiting-page'])
            }
            else{
              this.router.navigate(['student'])
              
            }


          })

        }else{

        }
      }
      ,(errorResponse)=>
      {
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
      })


    }
  }

  navigatetoforgetpass(){
    this.router.navigate(['auth/forget-pass'])
  }

}
