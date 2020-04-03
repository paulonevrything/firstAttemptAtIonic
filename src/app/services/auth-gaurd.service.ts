import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  canActivate(): boolean {
    let authInfo =  this.authService.isAuthenticated();

    if (!authInfo) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }
}
