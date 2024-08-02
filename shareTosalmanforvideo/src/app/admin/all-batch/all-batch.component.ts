import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-all-batch',
  templateUrl: './all-batch.component.html',
  styleUrls: ['./all-batch.component.scss']
})
export class AllBatchComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: any[] = [];
  // displayedColumns: string[] = ['courseName', 'teacherId', 'email', 'startDate', 'endDate', 'mobileNumber'];
  
  displayedColumns: string[] = ['courseName', 'teacherId', 'email', 'startDate', 'endDate', 'mobileNumber', 'action'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private router:Router) {}

    // Optionally, add methods to handle icon actions, like viewing details
    viewDetails(element: any) {
      this.router.navigate(['admin/batch/'+element])
      console.log('Viewing details of:', element);
    }

  ngOnInit() {
    this.api.getBatches().subscribe(
      (successResponse: any) => {
        console.log(successResponse);
        this.ELEMENT_DATA = successResponse;
        this.dataSource.data = this.ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (errorResponse) => {
        alert(errorResponse.error.message);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
