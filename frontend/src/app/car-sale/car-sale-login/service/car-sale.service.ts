import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';
import { ErrorDialogComponent } from '../config/error-dialog/error-dialog.component';
import { AuthenticationGuard } from '../config/guards/authentication.guards';
import { LoginRequest } from '../model/request/login-request';
import { LoginResponse } from '../model/response/login-response';

@Injectable({
  providedIn: 'root'
})
export class CarSaleService {

  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog,
    private authenticationGuard: AuthenticationGuard
  ) { }

  public getLogin(request: LoginRequest): Observable<LoginResponse> {
    const loginUrl = 'http://localhost:8080/api/login'
    return this.httpClient
      .post<LoginResponse>(loginUrl, request)
      .pipe(tap(respJwt => this.authenticationGuard.response = respJwt));
  }

  public showError(msgError: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: msgError
    });
  }
}
