import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-student-waiting-pages',
  templateUrl: './student-waiting-pages.component.html',
  styleUrls: ['./student-waiting-pages.component.scss']
})
export class StudentWaitingPagesComponent implements OnInit {
  isLoading = false; // Variable to track the loader state
  userId: any;

  constructor(private router: Router, private api: ApiService) {}

  logout() {
    localStorage.clear();
    this.router.navigate(['auth']);
  }

  ngOnInit(): void {
    let username = localStorage.getItem('username');
    console.log(username);
    this.api.getStudentByUserName(username).subscribe((successResponse: any) => {
      console.log(successResponse);
      this.userId = successResponse.id;
    });
  }

  downloadPdf() {
    this.isLoading = true; // Start the loader
    console.log(this.userId);
    this.api.getPdfById(this.userId).subscribe(
      (successResponse: any) => {
        this.isLoading = false; // Stop the loader
        const fileURL = URL.createObjectURL(successResponse);
        window.open(fileURL, '_blank');
      },
      (errorResponse: any) => {
        this.isLoading = false; // Stop the loader
        console.log(errorResponse);
      }
    );
  }
}
