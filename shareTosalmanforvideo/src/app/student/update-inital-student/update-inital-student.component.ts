import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-update-inital-student',
  templateUrl: './update-inital-student.component.html',
  styleUrls: ['./update-inital-student.component.scss']
})
export class UpdateInitalStudentComponent implements OnInit {
  
  enrolmentForm: FormGroup;
  photoFile: File | null = null;
  dataBYUsername: any;
  username: string | null = '';
  academicYears: number[] = [];
  states: any[] = [];
  cities: any[] = [];
  permanentCities: any[] = [];
  currentStep: number = 1;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.enrolmentForm = this.fb.group({
      // Step 1: Personal Details
      enrolmentNo: [{ value: '', disabled: true }, Validators.required],
      fullName: [{ value: '', disabled: true }, Validators.required],
      dob: [{ value: '', disabled: true }, Validators.required],
      mobileNo: [ {value:'',disabled: true}, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      adharNo: [{ value: '', disabled: true }, Validators.required],
      email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
      formFillOrNot: [true, Validators.required],
      fatherName: ['', Validators.required],
      fatherNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      fatherOccupation: ['', Validators.required],
      presentAddress: ['', Validators.required],
      presentCity: ['', Validators.required],
      presentPin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      presentState: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      permanentCity: ['', Validators.required],
      permanentPin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      permanentState: ['', Validators.required],
      religion: ['', Validators.required],
      caste: ['', Validators.required],
      photo:[''],
      academicStartYear: ['', Validators.required],
      academicEndYear: ['', Validators.required],
      // Step 2: Reference Details
      referenceName: ['', Validators.required],
      referenceOccupation: ['', Validators.required],
      referenceRelationship: ['', Validators.required],
      referenceResidentialAddress: ['', Validators.required],
      referenceMobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      date: [this.getCurrentDate(), Validators.required],
      approvalStatus:[false],
      residencePlace: [''],
      // Step 3: Education and Other Qualifications
      education: this.fb.group({
        secondaryName: [''],
        secondarymarksOrGrade: [''],
        secondaryyear: [''],
        secondaryBoard: [''],
        secondaryGradeType: [''],
        seniorSecondaryName: [''],
        seniorSecondaryMarksOrGrade: [''],
        seniorSecondaryYear: [''],
        seniorSecondaryBoard: [''],
        seniorSecondaryGradeType: [''],
        graduationName: [''],
        graduationMarksOrGrade: [''],
        graduationYear: [''],
        graduationBoard: [''],
        graduationGradeType: [''],
        postGraduationName: [''],
        postGraduationMarksOrGrade: [''],
        postGraduationYear: [''],
        postGraduationBoard: [''],
        postGraduationGradeType: [''],
      }),
      otherQualifications: this.fb.array([])
    });

    // Initialize the otherQualifications FormArray
    this.addOtherQualification();
  }
  getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  ngOnInit(): void {
    this.generateAcademicYears();
    this.states = State.getStatesOfCountry('IN');
    this.username = localStorage.getItem('username');
    if (this.username) {
      this.api.getStudentByUserName(this.username).subscribe(
        (successResponse: any) => {
          this.dataBYUsername = successResponse;
          this.patchFormValues();
        },
        (errorResponse) => {
          console.log(errorResponse);
        }
      );
    }
  }

  get otherQualifications(): FormArray {
    return this.enrolmentForm.get('otherQualifications') as FormArray;
  }

  addOtherQualification() {
    const qualificationGroup = this.fb.group({
      othersName: [''],
      othersMarksOrGrade: [''],
      othersYear: [''],
      othersDocumentBoard: ['']
    });
    this.otherQualifications.push(qualificationGroup);
  }

  removeOtherQualification(index: number) {
    this.otherQualifications.removeAt(index);
  }

  patchFormValues(): void {
    const data = this.dataBYUsername || {};
    const educationData = data.education || {};
    const otherQualificationsData = data.othersQualifications || [];

    this.enrolmentForm.patchValue({
      enrolmentNo: data.enrolmentNo || '',
      fullName: data.fullName || '',
      dob: data.dob || '',
      mobileNo: data.mobileNo || '',
      adharNo: data.adharNo || '',
      email: data.email || '',
      formFillOrNot: data.formFillOrNot || true,
      fatherName: data.fatherName || '',
      fatherNo: data.fatherNo || '',
      fatherOccupation: data.fatherOccupation || '',
      presentAddress: data.presentAddress || '',
      presentCity: data.presentCity || '',
      presentPin: data.presentPin || '',
      presentState: data.presentState || '',
      permanentAddress: data.permanentAddress || '',
      permanentCity: data.permanentCity || '',
      permanentPin: data.permanentPin || '',
      permanentState: data.permanentState || '',
      religion: data.religion || '',
      caste: data.caste || '',
      academicStartYear: data.academicStartYear || '',
      academicEndYear: data.academicEndYear || '',
      referenceName: data.referenceName || '',
      referenceOccupation: data.referenceOccupation || '',
      referenceRelationship: data.referenceRelationship || '',
      referenceResidentialAddress: data.referenceResidentialAddress || '',
      referenceMobileNo: data.referenceMobileNo || '',
      
      residencePlace: data.residencePlace || 'DUBAI',
      education: {
        secondaryName: educationData.secondaryName || '',
        secondarymarksOrGrade: educationData.secondarymarksOrGrade || '',
        secondaryyear: educationData.secondaryyear || '',
        secondaryBoard: educationData.secondaryBoard || '',
        secondaryGradeType: educationData.secondaryGradeType || '',
        seniorSecondaryName: educationData.seniorSecondaryName || '',
        seniorSecondaryMarksOrGrade: educationData.seniorSecondaryMarksOrGrade || '',
        seniorSecondaryYear: educationData.seniorSecondaryYear || '',
        seniorSecondaryBoard: educationData.seniorSecondaryBoard || '',
        seniorSecondaryGradeType: educationData.seniorSecondaryGradeType || '',
        graduationName: educationData.graduationName || '',
        graduationMarksOrGrade: educationData.graduationMarksOrGrade || '',
        graduationYear: educationData.graduationYear || '',
        graduationBoard: educationData.graduationBoard || '',
        graduationGradeType: educationData.graduationGradeType || '',
        postGraduationName: educationData.postGraduationName || '',
        postGraduationMarksOrGrade: educationData.postGraduationMarksOrGrade || '',
        postGraduationYear: educationData.postGraduationYear || '',
        postGraduationBoard: educationData.postGraduationBoard || '',
        postGraduationGradeType: educationData.postGraduationGradeType || ''
      }
    });

    // Patch other qualifications
    this.otherQualifications.clear();
    otherQualificationsData.forEach((qualification: any) => {
      this.otherQualifications.push(this.fb.group({
        othersName: qualification.othersName || '',
        othersMarksOrGrade: qualification.othersMarksOrGrade || '',
        othersYear: qualification.othersYear || '',
        othersDocumentBoard: qualification.othersDocumentBoard || ''
      }));
    });

    // Revalidate the form after patching values
    this.enrolmentForm.updateValueAndValidity();
  }

  generateAcademicYears() {
    const startYear = 2005;
    const endYear = new Date().getFullYear();
    for (let i = endYear; i >= startYear; i--) {
      this.academicYears.push(i);
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.photoFile = input.files[0];
      this.enrolmentForm.patchValue({
        photo: this.photoFile
      });
    }
  }

  setCities(event: any) {
    this.cities = City.getCitiesOfState('IN', event.target.value);
  }

  setPermanentCities(event: any) {
    this.permanentCities = City.getCitiesOfState('IN', event.target.value);
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  // onSubmit() {
  //   if (this.enrolmentForm.valid) {
  //     const formData = new FormData();
  //     const studentData = this.enrolmentForm.getRawValue();

  //     formData.append('studentData', JSON.stringify(studentData));
  //     if (this.photoFile) {
  //       formData.append('photo', this.photoFile);
  //     }

  //     this.api.updateinitialStudent(this.username, formData).subscribe(
  //       (successResponse) => {
  //         Swal.fire({
  //           title: 'Successfully Updated The Details',
  //           width: 600,
  //           padding: '3em',
  //           color: 'white',
  //           background: 'grey',
  //           confirmButtonColor: '#1a2b39'
  //         });
  //         this.router.navigate(['/student']);
  //       },
  //       (errorResponse) => {
  //         const errorMessage = errorResponse?.error?.message || 'An error occurred';
  //         Swal.fire({
  //           title: errorMessage,
  //           width: 600,
  //           padding: '3em',
  //           color: 'white',
  //           background: 'grey',
  //           confirmButtonColor: '#1a2b39'
  //         });
  //       }
  //     );
  //   } else {
  //     Swal.fire({
  //       title: 'Form is invalid',
  //       width: 600,
  //       padding: '3em',
  //       color: 'white',
  //       background: 'grey',
  //       confirmButtonColor: '#1a2b39'
  //     });
  //     console.error('Form is invalid');
  //   }
  // }
  onSubmit() {
    console.log(this.enrolmentForm.value);
    // if (this.enrolmentForm.valid) {
      // Extract form values
      const formData = this.enrolmentForm.getRawValue();
  
      // Structure the data according to your object schema
      const studentData = {
        enrolmentNo: formData.enrolmentNo,
        fullName: formData.fullName,
        dob: formData.dob,
        mobileNo: formData.mobileNo,
        adharNo: formData.adharNo,
        email: formData.email,
        formFillOrNot: formData.formFillOrNot,
        fatherName: formData.fatherName,
        fatherNo: formData.fatherNo,
        fatherOccupation: formData.fatherOccupation,
        presentAddress: formData.presentAddress,
        presentCity: formData.presentCity,
        presentPin: formData.presentPin,
        presentState: formData.presentState,
        permanentAddress: formData.permanentAddress,
        permanentCity: formData.permanentCity,
        permanentPin: formData.permanentPin,
        permanentState: formData.permanentState,
        religion: formData.religion,
        caste: formData.caste,
        academicStartYear: formData.academicStartYear,
        academicEndYear: formData.academicEndYear,
        referenceName: formData.referenceName,
        referenceOccupation: formData.referenceOccupation,
        referenceRelationship: formData.referenceRelationship,
        referenceResidentialAddress: formData.referenceResidentialAddress,
        referenceMobileNo: formData.referenceMobileNo,
        date: formData.date,
        residencePlace: formData.residencePlace,
        education: [{
          secondaryName: formData.education?.secondaryName,
          secondarymarksOrGrade: formData.education?.secondarymarksOrGrade,
          secondaryyear: formData.education?.secondaryyear,
          secondaryBoard: formData.education?.secondaryBoard,
          secondaryGradeType: formData.education?.secondaryGradeType,
          seniorSecondaryName: formData.education?.seniorSecondaryName,
          seniorSecondaryMarksOrGrade: formData.education?.seniorSecondaryMarksOrGrade,
          seniorSecondaryYear: formData.education?.seniorSecondaryYear,
          seniorSecondaryBoard: formData.education?.seniorSecondaryBoard,
          seniorSecondaryGradeType: formData.education?.seniorSecondaryGradeType,
          graduationName: formData.education?.graduationName,
          graduationMarksOrGrade: formData.education?.graduationMarksOrGrade,
          graduationYear: formData.education?.graduationYear,
          graduationBoard: formData.education?.graduationBoard,
          graduationGradeType: formData.education?.graduationGradeType,
          postGraduationName: formData.education?.postGraduationName,
          postGraduationMarksOrGrade: formData?.education.postGraduationMarksOrGrade,
          postGraduationYear: formData.education?.postGraduationYear,
          postGraduationBoard: formData.education?.postGraduationBoard,
          postGraduationGradeType: formData.education?.postGraduationGradeType,
        }],
        othersQualifications: formData.otherQualifications.map((qualification: any) => ({
          // id: qualification.id,
          othersName: qualification?.othersName,
          othersMarksOrGrade: qualification?.othersMarksOrGrade,
          othersYear: qualification?.othersYear,
          othersDocumentBoard: qualification?.othersDocumentBoard
        }))
      };
  
      // Create FormData object
      const formDataToSend = new FormData();
      formDataToSend.append('studentData', JSON.stringify(studentData));
      if (this.photoFile) {
        formDataToSend.append('photo', this.photoFile);
      }
  
      // Send the FormData object to the API
      this.api.updateinitialStudent(this.username, formDataToSend).subscribe(
        (successResponse) => {
          Swal.fire({
            title: 'Successfully Updated The Details',
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
          this.router.navigate(['auth/student-waiting-page']);
        },
        (errorResponse) => {
          const errorMessage = errorResponse?.error?.message || 'An error occurred';
          Swal.fire({
            title: errorMessage,
            width: 600,
            padding: '3em',
            color: 'white',
            background: 'grey',
            confirmButtonColor: '#1a2b39'
          });
        }
      );
    // } else {
    //   Swal.fire({
    //     title: 'Form is invalid',
    //     width: 600,
    //     padding: '3em',
    //     color: 'white',
    //     background: 'grey',
    //     confirmButtonColor: '#1a2b39'
    //   });
    //   console.error('Form is invalid');
    // }
  }
  

  logout() {
    this.router.navigate(['auth']);
    localStorage.clear();
  }
}
