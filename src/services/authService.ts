import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private apiUrl = 'http://localhost:8080/login';
  
    constructor(private http: HttpClient) {}
  
    loginByUsername(username: string): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}?username=${username}`);
    }
  }