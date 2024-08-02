import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-nav',
  templateUrl: './student-nav.component.html',
  styleUrls: ['./student-nav.component.scss']
})
export class StudentNavComponent {
  
  constructor(private router:Router){}
  public logout(){
   localStorage.clear() 
   this.router.navigate(['auth'])
  }
  


}
