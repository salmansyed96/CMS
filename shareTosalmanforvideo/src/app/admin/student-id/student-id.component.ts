// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ApiService } from 'src/app/services/api/api.service';
// import Swal from 'sweetalert2';

// @Component({
//   selector: 'app-student-id',
//   templateUrl: './student-id.component.html',
//   styleUrls: ['./student-id.component.scss']
// })
// export class StudentIdComponent {
//   studentData: any;
//   showOthers: boolean = false;

//   constructor(private activate_route: ActivatedRoute, private api: ApiService, private router:Router) {}

//   ngOnInit(): void {
//     let id = this.activate_route.snapshot.params['id'];
//     console.log(`Fetching data for ID: ${id}`);
//     this.api.getStudentByUserName(id).subscribe(
//       (successResponse: any) => {
//         console.log('API response:', successResponse);
//         if (successResponse && typeof successResponse === 'object') {
//           this.studentData = successResponse;
//           console.log('Data loaded:', this.studentData?.fullName);
//         } else {
//           console.warn('No data found or data format is incorrect.');
//         }
//       },
//       (errorResponse:any) => {
//         console.log(errorResponse);
//         const errorMessage = errorResponse.error?.message || 'An error occurred';
//         Swal.fire({
//           title: errorMessage,
//           width: 600,
//           padding: '3em',
//           color: 'white',
//           background: 'rgba( 255, 255, 255, 0.25 )',
//           confirmButtonColor: '#1a2b39'
//         });
//       }
//     );
//   }

//   toggleShowOthers(): void {
//     this.showOthers = !this.showOthers;
//   }

//   goBack(): void {
//     this.router.navigate(['admin/all-student'])
//     // Logic to navigate back, e.g., using Angular's Location service
//   }
// }


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.scss']
})
export class StudentIdComponent implements OnInit {
  studentData: any;
  showOthers: boolean = false;

  constructor(private activate_route: ActivatedRoute, private api: ApiService, private router:Router) {}

  ngOnInit(): void {
    let id = this.activate_route.snapshot.params['id'];
    console.log(`Fetching data for ID: ${id}`);
    this.api.getStudentByUserName(id).subscribe(
      (successResponse: any) => {
        console.log('API response:', successResponse);
        if (successResponse && typeof successResponse === 'object') {
          this.studentData = successResponse;
          console.log('Data loaded:', this.studentData?.fullName);
        } else {
          console.warn('No data found or data format is incorrect.');
        }
      },
      (errorResponse:any) => {
        console.log(errorResponse);
        const errorMessage = errorResponse.error?.message || 'An error occurred';
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: '3em',
          color: 'white',
          background: 'rgba( 255, 255, 255, 0.25 )',
          confirmButtonColor: '#1a2b39'
        });
      }
    );
  }

  toggleShowOthers(): void {
    this.showOthers = !this.showOthers;
  }

  goBack(): void {
    this.router.navigate(['admin/all-student']);
  }
  edit(id:any){
    console.log(id);
    this.router.navigate(['admin/admin-update-student/'+id])
  }
}

