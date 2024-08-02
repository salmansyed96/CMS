import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-staff-by-id',
  templateUrl: './staff-by-id.component.html',
  styleUrls: ['./staff-by-id.component.scss']
})
export class StaffByIdComponent {
  data: any;

  constructor(private activate_route: ActivatedRoute, private api: ApiService,private route:Router) {}

  ngOnInit(): void {
    let id = this.activate_route.snapshot.params['id'];
    console.log(`Fetching data for ID: ${id}`);
    this.api.getTeacherByUserName(id).subscribe(
      (successResponse: any) => {
        console.log('API response:', successResponse);
        if (successResponse && typeof successResponse === 'object') {
          this.data = successResponse;
          console.log('Data loaded:', this.data?.firstName);
        } else {
          console.warn('No data found or data format is incorrect.');
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  goBack(){
this.route.navigate(['admin/staff'])

  }
  edit(id:any){
    console.log(id)
    this.route.navigate(['admin/update-staff/'+id])
  }
}
