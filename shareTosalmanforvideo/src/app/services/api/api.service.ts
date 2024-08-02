import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl:string="https://96a8-106-222-213-35.ngrok-free.app/"
// baseUrl:string="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  isLoggedIn(): boolean {
    // Yaha aap login status check kar sakte hain
    // Example: localStorage mein token check karna
    return !!localStorage.getItem('access_token');
  }

  public generatePassword(data:any){
    return this.http.post(this.baseUrl+"api/auth/update-password",data)

  }
  public login(data:any){
    return this.http.post(this.baseUrl+"api/auth/v1/signin",data)

  }

  public addStudent(data:any){
    return this.http.post(this.baseUrl+"api/v1/students/initial",data)
  }
  public updateinitialStudent(id:any,data:any){
    return this.http.post(this.baseUrl+"api/v1/students/complete/"+id,data)
  }


  public addCourse(data:any){
    return this.http.post(this.baseUrl+"api/v1/subject",data)
  }
  public addTeacher(data:any){
    return this.http.post(this.baseUrl+"api/v1/teacher",data)
  }

  public getCourse(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( this.baseUrl+"api/v1/subject",{headers})
  }
  public getTeacher(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( this.baseUrl+"api/v1/teachers",{headers})
  }
  public getBatches(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( this.baseUrl+"api/v1/teacher/batch-allotment/all",{headers})
  }
  public getStudent(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( this.baseUrl+"api/v1/students/student",{headers})
  }
  public StudentAlloted(){
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': '69420'
    });
    return this.http.get( this.baseUrl+"api/v1/teacher/student-allotment/all",{headers})
  }

public batchAllotment(data:any){
  console.log(data)
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.post(this.baseUrl+"api/v1/teacher/batch-allotment/save",data,{headers})
 
}

public studentAllotment(data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.post(this.baseUrl+"api/v1/teacher/student-allotment/save",data,{headers})
}

//get by username
getPdfById(id: any) {
  const headers = new HttpHeaders({
    'ngrok-skip-browser-warning': '69420'
  });

  return this.http.get(`${this.baseUrl}api/v1/students/pdf/${id}`, {
    headers,
    responseType: 'blob' as 'json' // Ensure responseType is set to 'blob'
  });
}
public getStudentByUserName(username:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/v1/students/student/by-enrolmentNo/"+username,{headers})
}
public getTeacherByUserName(username:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/v1/teacher/by-teacher-id/"+username,{headers})
}
public getBatchDetailsById(username:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/v1/teacher/batch-allotment/"+username,{headers})
}
// public getBatchAllotmentById(id:any){
//   const headers = new HttpHeaders({
    
//     'ngrok-skip-browser-warning': '69420'
//     });
//   return this.http.get(this.baseUrl+"api/v1/batch-allotment/"+id,{headers})
// }
public getStudentAllotedDetailsById(username:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/v1/teacher/student-allotment/"+username,{headers})
}
public getCourseDetailsById(id:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/v1/subject/"+id,{headers})
}
public getEmailVerifyByEmail(id:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/auth/exist-email/"+id,{headers})
}
public getAadharVerifyByEmail(id:any){
  const headers = new HttpHeaders({
    
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.get(this.baseUrl+"api/auth/exist-adharno/"+id,{headers})
}


public forgetPassword(data: any) {
  console.log(data)
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  const body = new HttpParams().set('email', data.email);

  return this.http.post(this.baseUrl + 'api/auth/forgot-password', body.toString(), { headers });
}
public resetPassword(data:any){
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420'
    });
  return this.http.post(this.baseUrl+"api/auth/reset-password",data,{headers})
}

// public batchAllotment(data: any){
//   return this.http.post(this.baseUrl+"api/v1/batch-allotment/save",data)
// }







  public signUp(data:any){
    return this.http.post(this.baseUrl+"signup",data)
  }


  //update api

  public updateTeacher(data:any,id:any){
    // console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
      });
    return this.http.put(this.baseUrl+"api/v1/teacher/"+id,data,{headers})
  }

  public updateCourse(id:any,data:any){
    // console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
      });
    return this.http.put(this.baseUrl+"api/v1/subject/"+id,data,{headers})
  }
  public updateBatchAllotment(id:any,data:any){
    console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
      });
    return this.http.put(this.baseUrl+"api/v1/teacher/batch-allotment/update/"+id,data,{headers})
  }
  public updateStudentAllotment(id:any,data:any){
    console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
      });
    return this.http.put(this.baseUrl+"api/v1/teacher/student-allotment/update/"+id,data,{headers})
  }
  public ApprovedStatusById(id:any){
    console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
      });
    return this.http.put(this.baseUrl+"api/v1/students/approve/"+id,{headers})
  }
  public DeleteCourse(id:any,data:any){
    console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420'
      });
    return this.http.put(this.baseUrl+"api/v1/subject/"+id,data,{headers})
  }
  



}
