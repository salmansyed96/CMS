import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface StudentData {
  enrolmentNo: string;
  fullName: string;
  dob: string;
  mobileNo: string;
  aadharNo: string;
  photoData: string;
}

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.scss']
})
export class AllStudentComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['enrolmentNo', 'fullName', 'dob', 'mobileNo', 'aadharNo'];
  dataSource = new MatTableDataSource<StudentData>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService,private router:Router) { }

  ngOnInit() {
    this.api.getStudent().subscribe(
      (successResponse: any) => {
        console.log(successResponse);
        this.ELEMENT_DATA = successResponse;
        this.dataSource.data = this.ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (errorResponse) => {
        console.log(errorResponse.message);
        // alert(errorResponse.error.message);
        const errorMessage = errorResponse?.message ;
        Swal.fire({
          title: "There is no data available now.",
          width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
          confirmButtonColor: "#1a2b39"
         
        });
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  navigateToById(id:any){
    console.log(id);
    this.router.navigate(['admin/student/'+id])
    
  }
}
