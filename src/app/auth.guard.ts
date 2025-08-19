import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUserService } from './currentUser.service'; 
import { filter, map, take } from 'rxjs';

export const authGuard = () => {
  const currentUserService = inject(CurrentUserService);
  const router = inject(Router);

  return currentUserService.currentUser$.pipe(
    filter((currentUser) => currentUser !== undefined),
    take(1),
    map((currentUser) => {
      if (!currentUser) {
        router.navigateByUrl('/auth/signIn'); 
        return false;
      }
      return true;
    })
  );
};
