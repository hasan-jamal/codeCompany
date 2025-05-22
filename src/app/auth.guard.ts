import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { CurrentUserService } from './currentUser.service'; // تأكد من المسار الصحيح
import { filter, map } from 'rxjs';

export const authGuard = () => {
    const currentUserService = inject(CurrentUserService);
    const router = inject(Router);

    return currentUserService.currentUser$.pipe(
        filter((currentUser) => currentUser !== undefined),
        map((currentUser) => {
            if (!currentUser) {
                router.navigateByUrl('/');
                return false;
            }
            return true;
        })
    );
};
