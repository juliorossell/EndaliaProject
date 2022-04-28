import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagmentComponent } from './managment.component';
import { RrhhComponent } from './rrhh/rrhh.component';


const routes: Routes = [
  {
    path: '',
    component: ManagmentComponent,
    children: [
      {
        path: 'hr',
        component: RrhhComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagmentRoutingModule {}
