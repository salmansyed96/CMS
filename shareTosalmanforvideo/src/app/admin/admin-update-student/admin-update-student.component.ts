import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';
import { Country, State, City } from 'country-state-city';

@Component({
  selector: 'app-admin-update-student',
  templateUrl: './admin-update-student.component.html',
  styleUrls: ['./admin-update-student.component.scss']
})
// export class AdminUpdateStudentComponent {
 
//   enrolmentForm: FormGroup;
//   photoFile: File | null = null;
//   dataBYUsername: any;
//   username: string | null = '';
//   academicYears: number[] = [];
//   states: any[] = [];
//   cities: any[] = [];
//   permanentCities: any[] = [];
//   currentStep: number = 1;

//   constructor(private fb: FormBuilder, private api: ApiService, private router: Router , private activate_route:ActivatedRoute) {
//     this.enrolmentForm = this.fb.group({
//       // Step 1: Personal Details
//       enrolmentNo: [{ value: '', disabled: true }, Validators.required],
//       fullName: [{ value: '', disabled: true }, Validators.required],
//       dob: [{ value: '', disabled: true }, Validators.required],
//       mobileNo: [{value:'',disabled: true},  [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       adharNo: [{ value: '', disabled: true }, Validators.required],
//       email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
//       formFillOrNot: [true, Validators.required],
//       fatherName: ['', Validators.required],
//       fatherNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       fatherOccupation: ['', Validators.required],
//       presentAddress: ['', Validators.required],
//       presentCity: ['', Validators.required],
//       photo: ['', Validators.required],
//       presentPin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
//       presentState: ['', Validators.required],
//       permanentAddress: ['', Validators.required],
//       permanentCity: ['', Validators.required],
//       permanentPin: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
//       permanentState: ['', Validators.required],
//       religion: ['', Validators.required],
//       caste: ['', Validators.required],
//       academicStartYear: ['', Validators.required],
//       academicEndYear: ['', Validators.required],
//       // Step 2: Reference Details
//       referenceName: ['', Validators.required],
//       referenceOccupation: ['', Validators.required],
//       referenceRelationship: ['', Validators.required],
//       referenceResidentialAddress: ['', Validators.required],
//       referenceMobileNo: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
//       date: [this.getCurrentDate(), Validators.required],
//       approvalStatus:[true],
//       residencePlace: ['', Validators.required],
//       // Step 3: Education and Other Qualifications
//       education: this.fb.group({
//         secondaryName: [''],
//         secondarymarksOrGrade: [''],
//         secondaryyear: [''],
//         secondaryBoard: [''],
//         secondaryGradeType: [''],
//         seniorSecondaryName: [''],
//         seniorSecondaryMarksOrGrade: [''],
//         seniorSecondaryYear: [''],
//         seniorSecondaryBoard: [''],
//         seniorSecondaryGradeType: [''],
//         graduationName: [''],
//         graduationMarksOrGrade: [''],
//         graduationYear: [''],
//         graduationBoard: [''],
//         graduationGradeType: [''],
//         postGraduationName: [''],
//         postGraduationMarksOrGrade: [''],
//         postGraduationYear: [''],
//         postGraduationBoard: [''],
//         postGraduationGradeType: [''],
//       }),
//       otherQualifications: this.fb.array([])
//     });

//     // Initialize the otherQualifications FormArray
//     this.addOtherQualification();
//   }
//   getCurrentDate(): string {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   }
//   ngOnInit(): void {
//     this.generateAcademicYears();
//     this.states = State.getStatesOfCountry('IN');
//     // this.username = localStorage.getItem('username');
//     this.username=this.activate_route.snapshot.params['id']
//     if (this.username) {
//       this.api.getStudentByUserName(this.username).subscribe(
//         (successResponse: any) => {
//           this.dataBYUsername = successResponse;
//           console.log(this.dataBYUsername)
//           this.patchFormValues();
//         },
//         (errorResponse) => {
//           console.log(errorResponse);
//         }
//       );
//     }
//   }

//   get otherQualifications(): FormArray {
//     return this.enrolmentForm.get('otherQualifications') as FormArray;
//   }

//   addOtherQualification() {
//     const qualificationGroup = this.fb.group({
//       othersName: [''],
//       othersMarksOrGrade: [''],
//       othersYear: [''],
//       othersDocumentBoard: ['']
//     });
//     this.otherQualifications.push(qualificationGroup);
//   }

//   removeOtherQualification(index: number) {
//     this.otherQualifications.removeAt(index);
//   }

//   patchFormValues(): void {
//     const data = this.dataBYUsername || {};
//     const educationData = data.education || {};
//     console.log(data.presentCity,"****************************")
//     const otherQualificationsData = data.othersQualifications || [];

//     this.enrolmentForm.patchValue({
//       enrolmentNo: data.enrolmentNo || '',
//       fullName: data.fullName || '',
//       dob: data.dob || '',
//       mobileNo: data.mobileNo || '',
//       adharNo: data.adharNo || '',
//       email: data.email || '',
//       formFillOrNot: data.formFillOrNot || true,
//       fatherName: data.fatherName || '',
//       fatherNo: data.fatherNo || '',
//       fatherOccupation: data.fatherOccupation || '',
//       presentAddress: data.presentAddress || '',
//       presentCity: data.presentCity || '',
//       presentPin: data.presentPin || '',
//       presentState: data.presentState || '',
//       permanentAddress: data.permanentAddress || '',
//       permanentCity: data.permanentCity,
//       permanentPin: data.permanentPin || '',
//       permanentState: data.permanentState || '',
//       religion: data.religion || '',
//       caste: data.caste || '',
//       academicStartYear: data.academicStartYear || '',
//       academicEndYear: data.academicEndYear || '',
//       referenceName: data.referenceName || '',
//       referenceOccupation: data.referenceOccupation || '',
//       referenceRelationship: data.referenceRelationship || '',
//       referenceResidentialAddress: data.referenceResidentialAddress || '',
//       referenceMobileNo: data.referenceMobileNo || '',
//       date: data.date || '',
//       residencePlace: data.residencePlace || '',
//       photo:data.photoData ||'',
//       education: {
//         secondaryName: educationData[0].secondaryName || '',
//         secondarymarksOrGrade: educationData[0].secondarymarksOrGrade || '',
//         secondaryyear: educationData[0].secondaryyear || '',
//         secondaryBoard: educationData[0].secondaryBoard || '',
//         secondaryGradeType: educationData[0].secondaryGradeType || '',
//         seniorSecondaryName: educationData[0].seniorSecondaryName || '',
//         seniorSecondaryMarksOrGrade: educationData[0].seniorSecondaryMarksOrGrade || '',
//         seniorSecondaryYear: educationData[0].seniorSecondaryYear || '',
//         seniorSecondaryBoard: educationData[0].seniorSecondaryBoard || '',
//         seniorSecondaryGradeType: educationData[0].seniorSecondaryGradeType || '',
//         graduationName: educationData[0].graduationName || '',
//         graduationMarksOrGrade: educationData[0].graduationMarksOrGrade || '',
//         graduationYear: educationData[0].graduationYear || '',
//         graduationBoard: educationData[0].graduationBoard || '',
//         graduationGradeType: educationData[0].graduationGradeType || '',
//         postGraduationName: educationData[0].postGraduationName || '',
//         postGraduationMarksOrGrade: educationData[0].postGraduationMarksOrGrade || '',
//         postGraduationYear: educationData[0].postGraduationYear || '',
//         postGraduationBoard: educationData[0].postGraduationBoard || '',
//         postGraduationGradeType: educationData[0].postGraduationGradeType || ''
//       }
//     });

//     // Patch other qualifications
//     this.otherQualifications.clear();
//     otherQualificationsData.forEach((qualification: any) => {
//       this.otherQualifications.push(this.fb.group({
//         othersName: qualification.othersName || '',
//         othersMarksOrGrade: qualification.othersMarksOrGrade || '',
//         othersYear: qualification.othersYear || '',
//         othersDocumentBoard: qualification.othersDocumentBoard || ''
//       }));
//     });

//     // Revalidate the form after patching values
//     this.enrolmentForm.updateValueAndValidity();
//   }

//   generateAcademicYears() {
//     const startYear = 2005;
//     const endYear = new Date().getFullYear();
//     for (let i = endYear; i >= startYear; i--) {
//       this.academicYears.push(i);
//     }
//   }

//   onFileChange(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (input.files && input.files.length) {
//       this.photoFile = input.files[0];
//       this.enrolmentForm.patchValue({
//         photo: this.photoFile
//       });
//     }
//   }

//   setCities(event: any) {
//     this.cities = City.getCitiesOfState('IN', event.target.value);
//   }

//   setPermanentCities(event: any) {
//     this.permanentCities = City.getCitiesOfState('IN', event.target.value);
//   }

//   nextStep() {
//     this.currentStep++;
//   }

//   previousStep() {
//     this.currentStep--;
//   }

//   // onSubmit() {
//   //   if (this.enrolmentForm.valid) {
//   //     const formData = new FormData();
//   //     const studentData = this.enrolmentForm.getRawValue();

//   //     formData.append('studentData', JSON.stringify(studentData));
//   //     if (this.photoFile) {
//   //       formData.append('photo', this.photoFile);
//   //     }

//   //     this.api.updateinitialStudent(this.username, formData).subscribe(
//   //       (successResponse) => {
//   //         Swal.fire({
//   //           title: 'Successfully Updated The Details',
//   //           width: 600,
//   //           padding: '3em',
//   //           color: 'white',
//   //           background: 'grey',
//   //           confirmButtonColor: '#1a2b39'
//   //         });
//   //         this.router.navigate(['/student']);
//   //       },
//   //       (errorResponse) => {
//   //         const errorMessage = errorResponse?.error?.message || 'An error occurred';
//   //         Swal.fire({
//   //           title: errorMessage,
//   //           width: 600,
//   //           padding: '3em',
//   //           color: 'white',
//   //           background: 'grey',
//   //           confirmButtonColor: '#1a2b39'
//   //         });
//   //       }
//   //     );
//   //   } else {
//   //     Swal.fire({
//   //       title: 'Form is invalid',
//   //       width: 600,
//   //       padding: '3em',
//   //       color: 'white',
//   //       background: 'grey',
//   //       confirmButtonColor: '#1a2b39'
//   //     });
//   //     console.error('Form is invalid');
//   //   }
//   // }
//   onSubmit() {
//     console.log(this.enrolmentForm.value);
//     if (this.enrolmentForm.valid) {
//       // Extract form values
//       const formData = this.enrolmentForm.getRawValue();
  
//       // Structure the data according to your object schema
//       const studentData = {
//         enrolmentNo: formData.enrolmentNo,
//         fullName: formData.fullName,
//         dob: formData.dob,
//         mobileNo: formData.mobileNo,
//         adharNo: formData.adharNo,
//         email: formData.email,
//         formFillOrNot: formData.formFillOrNot,
//         fatherName: formData.fatherName,
//         fatherNo: formData.fatherNo,
//         fatherOccupation: formData.fatherOccupation,
//         presentAddress: formData.presentAddress,
//         presentCity: formData.presentCity,
//         presentPin: formData.presentPin,
//         presentState: formData.presentState,
//         permanentAddress: formData.permanentAddress,
//         permanentCity: formData.permanentCity,
//         permanentPin: formData.permanentPin,
//         permanentState: formData.permanentState,
//         religion: formData.religion,
//         caste: formData.caste,
//         academicStartYear: formData.academicStartYear,
//         academicEndYear: formData.academicEndYear,
//         referenceName: formData.referenceName,
//         referenceOccupation: formData.referenceOccupation,
//         referenceRelationship: formData.referenceRelationship,
//         referenceResidentialAddress: formData.referenceResidentialAddress,
//         referenceMobileNo: formData.referenceMobileNo,
//         date: formData.date,
//         residencePlace: formData.residencePlace,
//         education: [{
//           secondaryName: formData.education?.secondaryName,
//           secondarymarksOrGrade: formData.education?.secondarymarksOrGrade,
//           secondaryyear: formData.education?.secondaryyear,
//           secondaryBoard: formData.education?.secondaryBoard,
//           secondaryGradeType: formData.education?.secondaryGradeType,
//           seniorSecondaryName: formData.education?.seniorSecondaryName,
//           seniorSecondaryMarksOrGrade: formData.education?.seniorSecondaryMarksOrGrade,
//           seniorSecondaryYear: formData.education?.seniorSecondaryYear,
//           seniorSecondaryBoard: formData.education?.seniorSecondaryBoard,
//           seniorSecondaryGradeType: formData.education?.seniorSecondaryGradeType,
//           graduationName: formData.education?.graduationName,
//           graduationMarksOrGrade: formData.education?.graduationMarksOrGrade,
//           graduationYear: formData.education?.graduationYear,
//           graduationBoard: formData.education?.graduationBoard,
//           graduationGradeType: formData.education?.graduationGradeType,
//           postGraduationName: formData.education?.postGraduationName,
//           postGraduationMarksOrGrade: formData?.education.postGraduationMarksOrGrade,
//           postGraduationYear: formData.education?.postGraduationYear,
//           postGraduationBoard: formData.education?.postGraduationBoard,
//           postGraduationGradeType: formData.education?.postGraduationGradeType,
//         }],
//         othersQualifications: formData.otherQualifications.map((qualification: any) => ({
//           // id: qualification.id,
//           othersName: qualification?.othersName,
//           othersMarksOrGrade: qualification?.othersMarksOrGrade,
//           othersYear: qualification?.othersYear,
//           othersDocumentBoard: qualification?.othersDocumentBoard
//         }))
//       };
  
//       // Create FormData object
//       const formDataToSend = new FormData();
//       formDataToSend.append('studentData', JSON.stringify(studentData));
//       if (this.photoFile) {
//         formDataToSend.append('photo', this.photoFile);
//       }
  
//       // Send the FormData object to the API
//       this.api.updateinitialStudent(this.username, formDataToSend).subscribe(
//         (successResponse) => {
//           Swal.fire({
//             title: 'Successfully Updated The Details',
//             width: 600,
//             padding: '3em',
//             color: 'white',
//             background: 'grey',
//             confirmButtonColor: '#1a2b39'
//           });
//           this.router.navigate(['/admin']);
//         },
//         (errorResponse) => {
//           const errorMessage = errorResponse?.error?.message || 'An error occurred';
//           Swal.fire({
//             title: errorMessage,
//             width: 600,
//             padding: '3em',
//             color: 'white',
//             background: 'grey',
//             confirmButtonColor: '#1a2b39'
//           });
//         }
//       );
//     } else {
//       Swal.fire({
//         title: 'Form is invalid',
//         width: 600,
//         padding: '3em',
//         color: 'white',
//         background: 'grey',
//         confirmButtonColor: '#1a2b39'
//       });
//       console.error('Form is invalid');
//     }
//   }
  

//   logout() {
//     this.router.navigate(['auth']);
//     localStorage.clear();
//   }
// }
export class AdminUpdateStudentComponent {
  userId!:number
  enrolmentForm: FormGroup;
  photoFile: File | null = null;
  photoURL: string | null = null; // Add this property
  dataBYUsername: any;
  username: string | null = '';
  academicYears: number[] = [];
  states: any[] = [];
  cities: any[] = [];
  permanentCities: any[] = [];
  currentStep: number = 1;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router , private activate_route:ActivatedRoute) {
    this.enrolmentForm = this.fb.group({
      // Step 1: Personal Details
      enrolmentNo: [{ value: '', disabled: true }, Validators.required],
      fullName: [{ value: '', disabled: true }, Validators.required],
      dob: [{ value: '', disabled: true }, Validators.required],
      mobileNo: [{value:'',disabled: true},  [Validators.required, Validators.pattern(/^\d{10}$/)]],
      adharNo: [{ value: '', disabled: true }, Validators.required],
      email: [ { value: '', disabled: true }, [Validators.required, Validators.email]],
      formFillOrNot: [true, Validators.required],
      fatherName: [{ value: '', disabled: true }, Validators.required],
      fatherNo: [ { value: '', disabled: true }, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      fatherOccupation: [ { value: '', disabled: true }, Validators.required],
      presentAddress: [ { value: '', disabled: true }, Validators.required],
      presentCity: [{ value: '', disabled: true }, Validators.required],
      photo: [{ value: '', disabled: true }, Validators.required],
      presentPin: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^\d{6}$/)]],
      presentState: [{ value: '', disabled: true }, Validators.required],
      permanentAddress: [{ value: '', disabled: true }, Validators.required],
      permanentCity: [{ value: '', disabled: true }, Validators.required],
      permanentPin: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^\d{6}$/)]],
      permanentState: [{ value: '', disabled: true }, Validators.required],
      religion: [{ value: '', disabled: true }, Validators.required],
      caste: [{ value: '', disabled: true }, Validators.required],
      academicStartYear: [{ value: '', disabled: true }, Validators.required],
      academicEndYear: [{ value: '', disabled: true }, Validators.required],
      // Step 2: Reference Details
      referenceName: [{ value: '', disabled: true }, Validators.required],
      referenceOccupation: [{ value: '', disabled: true }, Validators.required],
      referenceRelationship: [{ value: '', disabled: true }, Validators.required],
      referenceResidentialAddress: [{ value: '', disabled: true }, Validators.required],
      referenceMobileNo: [{ value: '', disabled: true }, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      date: [this.getCurrentDate(), Validators.required],
      approvalStatus:[true],
      residencePlace: ['', Validators.required],
      // Step 3: Education and Other Qualifications
      education: this.fb.group({
        secondaryName: [{ value: '', disabled: true }],
        secondarymarksOrGrade: [{ value: '', disabled: true }],
        secondaryyear: [{ value: '', disabled: true }],
        secondaryBoard: [{ value: '', disabled: true }],
        secondaryGradeType: [{ value: '', disabled: true }],
        seniorSecondaryName: [{ value: '', disabled: true }],
        seniorSecondaryMarksOrGrade: [{ value: '', disabled: true }],
        seniorSecondaryYear: [{ value: '', disabled: true }],
        seniorSecondaryBoard: [{ value: '', disabled: true }],
        seniorSecondaryGradeType: [{ value: '', disabled: true }],
        graduationName: [{ value: '', disabled: true }],
        graduationMarksOrGrade: [{ value: '', disabled: true }],
        graduationYear: [{ value: '', disabled: true }],
        graduationBoard: [{ value: '', disabled: true }],
        graduationGradeType: [{ value: '', disabled: true }],
        postGraduationName: [{ value: '', disabled: true }],
        postGraduationMarksOrGrade: [{ value: '', disabled: true }],
        postGraduationYear: [{ value: '', disabled: true }],
        postGraduationBoard: [{ value: '', disabled: true }],
        postGraduationGradeType: [{ value: '', disabled: true }],
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
    this.username = this.activate_route.snapshot.params['id'];
    if (this.username) {
      this.api.getStudentByUserName(this.username).subscribe(
        (successResponse: any) => {
          this.dataBYUsername = successResponse;
          this.patchFormValues();
          // Load cities for present and permanent states
          this.loadCitiesForStates();
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
      othersName: [{ value: '', disabled: true }],
      othersMarksOrGrade: [{ value: '', disabled: true }],
      othersYear: [{ value: '', disabled: true }],
      othersDocumentBoard: [{ value: '', disabled: true }]
    });
    this.otherQualifications.push(qualificationGroup);
  }

  removeOtherQualification(index: number) {
    this.otherQualifications.removeAt(index);
  }

  loadCitiesForStates() {
    if (this.dataBYUsername?.presentState) {
      this.cities = City.getCitiesOfState('IN', this.dataBYUsername.presentState);
    }
    if (this.dataBYUsername?.permanentState) {
      this.permanentCities = City.getCitiesOfState('IN', this.dataBYUsername.permanentState);
    }
    // Patch the city values after loading the cities
    this.patchCityValues();
  }

  patchCityValues() {
    this.enrolmentForm.patchValue({
      presentCity: this.dataBYUsername?.presentCity || '',
      permanentCity: this.dataBYUsername?.permanentCity || ''
    });
  }

  patchFormValues(): void {
    const data = this.dataBYUsername || {};
    this.userId=data.id
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
      permanentCity: data.permanentCity,
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
      date: data.date || '',
      residencePlace: data.residencePlace || '',
      photo: data.photoData || '',
      education: {
        secondaryName: educationData[0].secondaryName || '',
        secondarymarksOrGrade: educationData[0].secondarymarksOrGrade || '',
        secondaryyear: educationData[0].secondaryyear || '',
        secondaryBoard: educationData[0].secondaryBoard || '',
        secondaryGradeType: educationData[0].secondaryGradeType || '',
        seniorSecondaryName: educationData[0].seniorSecondaryName || '',
        seniorSecondaryMarksOrGrade: educationData[0].seniorSecondaryMarksOrGrade || '',
        seniorSecondaryYear: educationData[0].seniorSecondaryYear || '',
        seniorSecondaryBoard: educationData[0].seniorSecondaryBoard || '',
        seniorSecondaryGradeType: educationData[0].seniorSecondaryGradeType || '',
        graduationName: educationData[0].graduationName || '',
        graduationMarksOrGrade: educationData[0].graduationMarksOrGrade || '',
        graduationYear: educationData[0].graduationYear || '',
        graduationBoard: educationData[0].graduationBoard || '',
        graduationGradeType: educationData[0].graduationGradeType || '',
        postGraduationName: educationData[0].postGraduationName || '',
        postGraduationMarksOrGrade: educationData[0].postGraduationMarksOrGrade || '',
        postGraduationYear: educationData[0].postGraduationYear || '',
        postGraduationBoard: educationData[0].postGraduationBoard || '',
        postGraduationGradeType: educationData[0].postGraduationGradeType || ''
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

    // Set the photo URL
    this.photoURL = data.photoData ;

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
      // Update the photo URL to show the selected file
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.photoURL = e.target.result;
      };
      reader.readAsDataURL(this.photoFile);
    }
  }

  setCities(event: any) {
    const stateCode = event.target.value;
    this.cities = City.getCitiesOfState('IN', stateCode);
    this.enrolmentForm.patchValue({ presentCity: '' }); // Reset city selection
  }

  setPermanentCities(event: any) {
    const stateCode = event.target.value;
    this.permanentCities = City.getCitiesOfState('IN', stateCode);
    this.enrolmentForm.patchValue({ permanentCity: '' }); // Reset city selection
  }

  nextStep() {
    this.currentStep++;
  }

  previousStep() {
    this.currentStep--;
  }

  onSubmit() {
    console.log(this.enrolmentForm.value);
    this.api.ApprovedStatusById(this.userId).subscribe((successResponse:any)=>{
      console.log(successResponse)
      Swal.fire({
                title: 'Successfully Approved The Student',
                width: 600,
                padding: '3em',
                color: 'white',
                background: 'grey',
                confirmButtonColor: '#1a2b39'
              });
              this.router.navigate(['/admin']);
    },(errorResponse)=>{
      console.log(errorResponse);
      Swal.fire({
        title: 'Something Went Wrong !',
        width: 600,
        padding: '3em',
        color: 'white',
        background: 'grey',
        confirmButtonColor: '#1a2b39'
      });
    })
    // if (this.enrolmentForm.valid) {
    //   // Extract form values
    //   const formData = this.enrolmentForm.getRawValue();
  
    //   // Structure the data according to your object schema
    //   const studentData = {
    //     enrolmentNo: formData.enrolmentNo,
    //     fullName: formData.fullName,
    //     dob: formData.dob,
    //     mobileNo: formData.mobileNo,
    //     adharNo: formData.adharNo,
    //     email: formData.email,
    //     formFillOrNot: formData.formFillOrNot,
    //     fatherName: formData.fatherName,
    //     fatherNo: formData.fatherNo,
    //     fatherOccupation: formData.fatherOccupation,
    //     presentAddress: formData.presentAddress,
    //     presentCity: formData.presentCity,
    //     presentPin: formData.presentPin,
    //     presentState: formData.presentState,
    //     permanentAddress: formData.permanentAddress,
    //     permanentCity: formData.permanentCity,
    //     permanentPin: formData.permanentPin,
    //     permanentState: formData.permanentState,
    //     religion: formData.religion,
    //     caste: formData.caste,
    //     academicStartYear: formData.academicStartYear,
    //     academicEndYear: formData.academicEndYear,
    //     referenceName: formData.referenceName,
    //     referenceOccupation: formData.referenceOccupation,
    //     referenceRelationship: formData.referenceRelationship,
    //     referenceResidentialAddress: formData.referenceResidentialAddress,
    //     referenceMobileNo: formData.referenceMobileNo,
    //     date: formData.date,
    //     residencePlace: formData.residencePlace,
    //     education: [{
    //       secondaryName: formData.education?.secondaryName,
    //       secondarymarksOrGrade: formData.education?.secondarymarksOrGrade,
    //       secondaryyear: formData.education?.secondaryyear,
    //       secondaryBoard: formData.education?.secondaryBoard,
    //       secondaryGradeType: formData.education?.secondaryGradeType,
    //       seniorSecondaryName: formData.education?.seniorSecondaryName,
    //       seniorSecondaryMarksOrGrade: formData.education?.seniorSecondaryMarksOrGrade,
    //       seniorSecondaryYear: formData.education?.seniorSecondaryYear,
    //       seniorSecondaryBoard: formData.education?.seniorSecondaryBoard,
    //       seniorSecondaryGradeType: formData.education?.seniorSecondaryGradeType,
    //       graduationName: formData.education?.graduationName,
    //       graduationMarksOrGrade: formData.education?.graduationMarksOrGrade,
    //       graduationYear: formData.education?.graduationYear,
    //       graduationBoard: formData.education?.graduationBoard,
    //       graduationGradeType: formData.education?.graduationGradeType,
    //       postGraduationName: formData.education?.postGraduationName,
    //       postGraduationMarksOrGrade: formData?.education.postGraduationMarksOrGrade,
    //       postGraduationYear: formData.education?.postGraduationYear,
    //       postGraduationBoard: formData.education?.postGraduationBoard,
    //       postGraduationGradeType: formData.education?.postGraduationGradeType,
    //     }],
    //     othersQualifications: formData.otherQualifications.map((qualification: any) => ({
    //       // id: qualification.id,
    //       othersName: qualification?.othersName,
    //       othersMarksOrGrade: qualification?.othersMarksOrGrade,
    //       othersYear: qualification?.othersYear,
    //       othersDocumentBoard: qualification?.othersDocumentBoard
    //     }))
    //   };
  
    //   // Create FormData object
    //   const formDataToSend = new FormData();
    //   formDataToSend.append('studentData', JSON.stringify(studentData));
    //   if (this.photoFile) {
    //     formDataToSend.append('photo', this.photoFile, this.photoFile.name);
    //   }
  
    //   // Send the FormData object to the API
    //   this.api.updateinitialStudent(this.username, formDataToSend).subscribe(
    //     (successResponse) => {
    //       Swal.fire({
    //         title: 'Successfully Updated The Details',
    //         width: 600,
    //         padding: '3em',
    //         color: 'white',
    //         background: 'grey',
    //         confirmButtonColor: '#1a2b39'
    //       });
    //       this.router.navigate(['/admin']);
    //     },
    //     (errorResponse) => {
    //       const errorMessage = errorResponse?.error?.message || 'An error occurred';
    //       Swal.fire({
    //         title: errorMessage,
    //         width: 600,
    //         padding: '3em',
    //         color: 'white',
    //         background: 'grey',
    //         confirmButtonColor: '#1a2b39'
    //       });
    //     }
    //   );
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

