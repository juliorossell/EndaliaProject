import { NgModule } from '@angular/core';

import { CanActivateViaAuthGuard } from './Auth.guard';
import { CanActivateViaIsLoggedGuard } from './IsLogged.guard';

@NgModule({
  providers: [
    CanActivateViaAuthGuard,
    CanActivateViaIsLoggedGuard
  ],
})
export class GuardModule {}
