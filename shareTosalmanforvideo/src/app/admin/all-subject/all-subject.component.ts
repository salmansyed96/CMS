import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

export interface CourseData {
  id: number;
  courseName: string;
  deleted: boolean;
}

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrls: ['./all-subject.component.scss']
})
export class AllSubjectComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: CourseData[] = [];
  displayedColumns: string[] = ['courseName', 'status', 'action'];
  dataSource = new MatTableDataSource<CourseData>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService ,private router:Router) { }

  ngOnInit() {
    this.api.getCourse().subscribe(
      (successResponse: any) => {
        console.log(successResponse);
        this.ELEMENT_DATA = successResponse;
        this.dataSource.data = this.ELEMENT_DATA;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (errorResponse) => {
        // alert(errorResponse.error.message);
        const errorMessage = errorResponse?.error?.message ;
        console.log(errorMessage)
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

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getStatus(deleted: boolean): string {
    return deleted ? 'Deleted' : 'Active';
  }

  editCourse(id: any) {
    // Implement edit functionality here
    console.log('Edit course:', id);
    this.router.navigate(['admin/update-course/'+id])
  }

  deleteCourse(courseId: number) {

    // Implement delete functionality here
    console.log('Delete course:', courseId);
  }
}
