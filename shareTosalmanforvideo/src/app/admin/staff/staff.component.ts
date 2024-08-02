import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

export interface StaffData {
  teacherId: string;
  firstName: string;
  lastName: string;
  dob: string;
  mobileNumber: string;
  email: string;
  address: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit, AfterViewInit {
  STAFF_DATA: any = [];
  displayedColumns: string[] = ['teacherId', 'firstName', 'lastName', 'dob', 'mobileNumber', 'email', 'address'];
  dataSource = new MatTableDataSource<StaffData>(this.STAFF_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.api.getTeacher().subscribe(
      (successResponse: any) => {
        this.STAFF_DATA = successResponse;
        this.dataSource.data = this.STAFF_DATA;
      },
      (errorResponse) => {
        // alert(errorResponse.error.message);
        const errorMessage = errorResponse?.error?.message ;
        Swal.fire({
          title: errorMessage,
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
          confirmButtonColor: "#1a2b39"
         
        });
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  navigateToById(id: any) {
    console.log(id);
    this.router.navigate(['/admin/staff/'+ id]);
  }
  navigateToadmin(){
    this.router.navigate(['admin'])
  }
}
