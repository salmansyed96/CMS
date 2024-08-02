import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stinit-navbar',
  templateUrl: './stinit-navbar.component.html',
  styleUrls: ['./stinit-navbar.component.scss']
})
export class StinitNavbarComponent {

  constructor(private router:Router){}
  public logout(){
   localStorage.clear() 
   this.router.navigate(['auth'])
  }
  Logout(){

  }

}
