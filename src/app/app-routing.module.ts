import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './core/main-template/main-template.component';
import { ForbiddenComponent } from './shared/components/forbidden/forbidden.component';
import { CanActivateViaAuthGuard } from './shared/guards/Auth.guard';
import { CanActivateViaIsLoggedGuard } from './shared/guards/IsLogged.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [CanActivateViaIsLoggedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
    ],
  },
  {
    path: 'modules',
    canActivate: [CanActivateViaAuthGuard],
    component: MainTemplateComponent,
    children: [
      {
        path: 'managment',
        loadChildren: () => import('./managment/managment.module').then(m => m.ManagmentModule)
      },
    ],
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
