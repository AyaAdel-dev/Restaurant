import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { inject } from '@angular/core';
export const userGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let authentication = inject(LoginService);

  if (
    authentication.isAuth$.value.Role == 'user' &&
    authentication.isAuth$.value.isAuthorized == true
  ) {
    return true;
  }
  router.navigateByUrl('/mainpage');
  return false;
};
