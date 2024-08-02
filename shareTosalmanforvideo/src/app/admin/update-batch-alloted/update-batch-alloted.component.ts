import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-batch-alloted',
  templateUrl: './update-batch-alloted.component.html',
  styleUrls: ['./update-batch-alloted.component.scss']
})
export class UpdateBatchAllotedComponent implements OnInit {
  batchForm: FormGroup;
  subjects: any[] = [];  // This will hold the subjects data
  teachers: any[] = [];  // This will hold the teachers data

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private activate_route: ActivatedRoute
  ) {
    this.batchForm = this.fb.group({
      subject: ['', Validators.required],
      teacher: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadSubjects();
    this.loadTeachers();
    this.loadBatchDetails();
  }

  loadSubjects(): void {
    this.api.getCourse().subscribe((subjects: any) => {
      this.subjects = subjects;
      this.setDefaultSubject();
    });
  }

  loadTeachers(): void {
    this.api.getTeacher().subscribe((teachers: any) => {
      this.teachers = teachers;
      this.setDefaultTeacher();
    });
  }

  setDefaultSubject(): void {
    // Set a default value for subject, assuming the subjects data has a default flag or similar
    const defaultSubject = this.subjects.find(subject => subject.isDefault);
    if (defaultSubject) {
      this.batchForm.get('subject')?.setValue(defaultSubject.id);
    }
  }

  setDefaultTeacher(): void {
    // Set a default value for teacher, assuming the teachers data has a default flag or similar
    const defaultTeacher = this.teachers.find(teacher => teacher.isDefault);
    if (defaultTeacher) {
      this.batchForm.get('teacher')?.setValue(defaultTeacher.id);
    }
  }

  loadBatchDetails(): void {
    const id = this.activate_route.snapshot.params['id'];
    if (id) {
      this.api.getBatchDetailsById(id).subscribe((batch: any) => {
        this.batchForm.patchValue({
          subject: batch.subject.id,
          teacher: batch.teacher.id,
          startDate: batch.startDate,
          endDate: batch.endDate
        });
      });
    }
  }

  onSubmit(): void {
    if (this.batchForm.valid) {
      const data = {
        subject: {
"id":this.batchForm.value.subject,
        },
        
        teacher: 
        {
"id":this.batchForm.value.teacher
        }
        ,
        startDate: this.batchForm.value.startDate,
        endDate: this.batchForm.value.endDate
      };
      let id=this.activate_route.snapshot.params['id']
      console.log(data);
      this.api.updateBatchAllotment(id,data).subscribe(
        () => {
          Swal.fire({
            title: 'Success',
            width: 600,
          padding: "3em",
          color: "white",
          background: "grey",
          confirmButtonColor: "#1a2b39"
          });
          this.router.navigate(['/admin/all-batch']);
        },
        (error:any) => {
          Swal.fire({
            title: 'Error',
            width: 600,
            padding: "3em",
            color: "white",
            background: "grey",
            confirmButtonColor: "#1a2b39"
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Invalid Form',
        width: 600,
        padding: "3em",
        color: "white",
        background: "grey",
        confirmButtonColor: "#1a2b39"
      });
    }
  }
}
