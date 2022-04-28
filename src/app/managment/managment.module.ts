import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ManagmentComponent } from './managment.component';
import { ManagmentRoutingModule } from './managment-routing';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { RrhhComponent } from './rrhh/rrhh.component';
import { CardModule } from '../shared/components/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ManagmentRoutingModule,
    RouterModule,
    SpinnerModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ ManagmentComponent, RrhhComponent],
  exports: [ ManagmentComponent, RrhhComponent],
  providers: []
})
export class ManagmentModule { }
