import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class adminGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(): boolean {
    if (this.loginService.isAuth$ && this.loginService.isAuth$.value.Role === 'admin' && this.loginService.isAuth$.value.isAuthorized) {
      return true;
    } else {
      this.router.navigateByUrl('/mainpage');
      return false;
    }
  }
}