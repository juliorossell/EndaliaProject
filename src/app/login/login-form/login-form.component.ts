

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, finalize, Subject, takeUntil, tap } from 'rxjs';
import { IUserInfo } from 'src/app/shared/interfaces/user-info';
import { FormService } from 'src/app/shared/services/form-service';
import { SecurityService } from 'src/app/shared/services/micro-services/security-service';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup;
  loadingPage: boolean = false;
  errorMessage = '';

  private destroy$ = new Subject();
  constructor(
    private fb: FormBuilder,
    private formService: FormService,
    private securityService: SecurityService,
    private userProfileService: UserProfileService,
    private router: Router,
  ) {
    localStorage.clear();
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ["prueba@endalia.com", [Validators.required , Validators.email]],
      password: ["123", Validators.required]
    })
  }

  onSubmitForm() {
    this.formService.markFormGroupAsTouched(this.loginForm);
    if (this.loginForm.valid) {
      this.loadingPage = true;
      const formValues: IUserInfo = this.loginForm.getRawValue();
      this.securityService.login(formValues)
      .pipe(
        takeUntil(this.destroy$),
        tap((res: any) => {
          if (res.body) {
            this.userProfileService.setTokenInLocalStorage(res.body)
          }
        }),
        tap(() => this.loadingPage = false),
        tap(() => this.router.navigate(['modules/managment/hr'])),
        catchError(async(e) => {
          this.errorMessage = '*Usuario o contraseña incorrectos';
        }),
        finalize(() =>  this.loadingPage = false)
      )
      .subscribe();
    }
  }
}
