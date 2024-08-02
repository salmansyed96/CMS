import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

export interface StudentAllotmentElement {
  student: {
    enrolmentNo: string;
    fullName: string;
    email: string;
    mobileNo: string;
    photoData: string | null;
  };
  batchAllotment: {
    startDate: string;
    endDate: string;
    subject: {
      courseName: string;
    };
    teacher: {
      teacherId: string;
      firstName: string;
      lastName: string;
      mobileNumber: string;
    };
  };
}

@Component({
  selector: 'app-all-student-alloted',
  templateUrl: './all-student-alloted.component.html',
  styleUrls: ['./all-student-alloted.component.scss']
})
export class AllStudentAllotedComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: StudentAllotmentElement[] = [];
  displayedColumns: string[] = [
    'enrolmentNo', 'fullName', 'email',
    'courseName', 'startDate', 'endDate', 'action'
  ];
  dataSource = new MatTableDataSource<StudentAllotmentElement>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private router:Router) {}

  ngOnInit() {
    this.api.StudentAlloted().subscribe(
      (successResponse: any) => {
        console.log(successResponse);
        this.ELEMENT_DATA = successResponse;
        this.dataSource.data = this.ELEMENT_DATA;
      },
      (errorResponse) => {
        alert(errorResponse.error.message);
        Swal.fire({
          title: 'Something Went Wrong !',
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

  viewDetails(id:any){
this.router.navigate(['admin/studentalloted/'+id])
  }
}
