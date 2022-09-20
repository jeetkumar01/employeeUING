import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getLoginStatus(loginDetails:any){
    
    return this.http.post('http://localhost:8080/login',loginDetails);
  }
}
