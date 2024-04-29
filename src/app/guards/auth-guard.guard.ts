import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../components/admin/services/auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let authservice = inject(AuthService);
  let routerService = inject(Router);
  
  if (!authservice.isLoggedIn()) {
    routerService.navigate(['/login']);
    return false;
  }
  
  return true;
};
