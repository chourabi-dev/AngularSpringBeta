import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  createUser(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post('http://localhost:8080/api/auth/signup',data,httpOptions);
  }


  
  signin(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post('http://localhost:8080/api/auth/signin',data,httpOptions);
  }


  getUserInfo(){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authorization': localStorage.getItem('token')
      })
    };

    return this.http.get('http://localhost:8080/api/auth/info',httpOptions);
  }
}
