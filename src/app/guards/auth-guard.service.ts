import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router,) { }

  canActivate() : boolean {
    if (!this.authService.user()) {
        this.router.navigate(['user/login']);
        return false;
    }
    return true;
}
}
