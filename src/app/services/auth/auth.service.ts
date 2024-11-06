import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from "../../interface/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private _currentUser = signal<Object| null>(null);
  currentUser = this._currentUser.asReadonly();



  login(login:UserInterface) {
    const j = JSON.stringify(login)
    return this.http.post("http://localhost:8000/api/login_check",j,{
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    });
  }
}
