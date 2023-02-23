import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginResponse } from '../../model/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  public response: LoginResponse;

  constructor() { }

  public canActivate(): boolean {
    return this.isAuthenticated();
  }

  public isAuthenticated() {
    return Boolean(this.response?.jwt);
  }

  public notAuthenticated() {
    this.response = undefined;
  }

}
