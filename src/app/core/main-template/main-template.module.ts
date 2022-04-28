import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTemplateComponent } from './main-template.component';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    FooterModule,
    HeaderModule,
    SidebarModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [MainTemplateComponent],
  exports: [MainTemplateComponent]
})
export class MainTemplateModule { }
