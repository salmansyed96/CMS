import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-batch-by-id',
  templateUrl: './batch-by-id.component.html',
  styleUrls: ['./batch-by-id.component.scss']
})
export class BatchByIdComponent implements OnInit {
  data: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.params['id'];
    console.log(`Fetching data for batch ID: ${id}`);
    this.api.getBatchDetailsById(id).subscribe(
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
        console.error('Error fetching data:',error);
      }
    );
  }

  goBack() {
    this.router.navigate(['admin/all-batch']);
  }
  edit(id:number){
    console.log('Edit',id);
    this.router.navigate(['admin/update-batch-allotment/'+id]);
  }
}
