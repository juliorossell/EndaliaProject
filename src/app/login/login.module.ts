import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    LoginRoutingModule
  ],
  declarations: [ LoginComponent ],
})
export class LoginModule { }
