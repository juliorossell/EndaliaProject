import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SecurityService } from 'src/app/shared/services/micro-services/security-service';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    SpinnerModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [ SecurityService ]
})
export class HeaderModule { }
