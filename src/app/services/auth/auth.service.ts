import {computed, inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from "../../interface/UserInterface";
import { tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private _currentUser = signal<Object| null>(null);
  currentUser = this._currentUser.asReadonly();
  isConnected = computed(() => this.currentUser() !== null)




  login(login:UserInterface) {

    return this.http.post<UserInterface>("https://localhost:8000/api/login_check",login,{
      withCredentials:true,
    }).pipe(
      tap(response => {
        this._currentUser.set(response.username)
      })
    );
  }


}
