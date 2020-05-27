import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface ICreateCredentials {
  email: string;
  password: string;
  firstName: string;
  lastName:string;
  role:string;
}

export interface IPasswordReset {
  code: string;
  newPassword: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor( private http:HttpClient, public router:Router, public jwtHelper: JwtHelperService) { }

  signIn(credentials: ISignInCredentials): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/login`, credentials)
    .pipe(
      map((response: any) => {
        this.processLogin(response);
        console.log('i got here');
        
        return response;
      })
    );
  }

  
  processLogin(response: any) {
    localStorage.setItem('TOKEN', response.data.token);
    localStorage.setItem('User', JSON.stringify(response.data.user));

  }
  signOut() {
    // return from(this.afAuth.auth.signOut());
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('User');
    localStorage.clear();
    this.router.navigate(['user/login']);
    // this.toastService.success('Logged Out')
  }

  register(credentials: ICreateCredentials) {
    // console.log('details incoming',credentials)
    return this.http.post(`${environment.apiUrl}/auth/signup`, credentials)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  sendPasswordEmail(email) {
    return this.http.post(`${environment.apiUrl}/auth/send`, email)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  resetPassword(credentials: IPasswordReset) {
    return this.http.post(`${environment.apiUrl}/auth/reset`, credentials)
    .pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  user(){    
    const token = localStorage.getItem('TOKEN');
    // console.log('Expired ? ', !this.jwtHelper.isTokenExpired(token));
    return !this.jwtHelper.isTokenExpired(token)
  }
}
