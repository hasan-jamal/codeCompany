import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/User/User.modal';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  setCurrentUser(user: User): void {
    this.currentUserSubject.next(user);
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify(user));
      if (user.token) localStorage.setItem('token', user.token);
    }
  }

  clearCurrentUser(): void {
    this.currentUserSubject.next(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
    }
  }

    getToken(): string | null {
      return localStorage.getItem('token');
    }
}
