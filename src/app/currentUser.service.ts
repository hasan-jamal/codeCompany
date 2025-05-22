import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
    id: string;
    username: string;
    // يمكنك إضافة المزيد من الخصائص حسب الحاجة
}

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

    private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
    public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

    constructor() {
        // يمكنك إضافة منطق لتعيين المستخدم الحالي من الجلسة أو عبر API
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            this.currentUserSubject.next(JSON.parse(storedUser));
        }
    }

    setCurrentUser(user: User): void {
        this.currentUserSubject.next(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    clearCurrentUser(): void {
        this.currentUserSubject.next(null);
        localStorage.removeItem('currentUser');
    }
}
