import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from 'rxjs';
import { EmailError } from '../../config/validation/email-error';
import { LoginRequest } from '../../model/request/login-request';
import { CarSaleService } from '../../service/car-sale.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public matcher = new EmailError();
  private subscription: Array<Subscription> = [];

  constructor(
    private carSaleService: CarSaleService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.loginForm();
  }

  public loginForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  public getFormControl() {
    return this.form.controls;
  }

  public getUserLogin() {
    let request = new LoginRequest();
    request.login = this.getFormControl()['email'].value;
    request.password = this.getFormControl()['password'].value;
    this.carSaleService.getLogin(request).subscribe(
      resp => {
        if (resp && resp.jwt) {
          this.router.navigate(['dashboard'])
        }
      },
      error => {
        if (this.form.valid && error) {
          this.carSaleService.showError(error.error.message)
        }
      });
  }

  public ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe());
  }

}
