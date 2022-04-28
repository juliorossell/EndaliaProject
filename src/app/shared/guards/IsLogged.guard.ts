import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class CanActivateViaIsLoggedGuard implements CanActivate {
  constructor(private router: Router) {
    //
  }

  canActivate(): boolean {
    return this.checkAuthenticated();
  }

  checkAuthenticated(): boolean {
    const tokenSesion = localStorage.getItem('token');
    if (tokenSesion) {
      this.router.navigate(['modules/managment/movies']);
    }
    return true;
  }
}
