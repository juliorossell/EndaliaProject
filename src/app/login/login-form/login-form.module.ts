import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { FormService } from 'src/app/shared/services/form-service';
import { SecurityService } from 'src/app/shared/services/micro-services/security-service';
import { UserProfileService } from 'src/app/shared/services/user-profile.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerModule,
    RouterModule,
  ],
  declarations: [LoginFormComponent],
  providers: [FormService, SecurityService, UserProfileService]
})
export class LoginFormModule { }
