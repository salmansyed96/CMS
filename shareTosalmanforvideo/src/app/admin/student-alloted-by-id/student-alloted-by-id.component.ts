import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-student-alloted-by-id',
  templateUrl: './student-alloted-by-id.component.html',
  styleUrls: ['./student-alloted-by-id.component.scss']
})
export class StudentAllotedByIdComponent implements OnInit {
  data: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    console.log(`Fetching data for student allotment ID: ${id}`);
    this.api.getStudentAllotedDetailsById(id).subscribe(
      (successResponse: any) => {
        console.log('API response:', successResponse);
        if (successResponse && typeof successResponse === 'object') {
          this.data = successResponse;
          console.log('Data loaded:', this.data);
        } else {
          console.warn('No data found or data format is incorrect.');
        }
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  goBack() {
    this.router.navigate(['admin/all-student-alloted']);
  }
  edit(id:number){
    this.router.navigate(['admin/update-student-allotment/'+id])
  }
}
