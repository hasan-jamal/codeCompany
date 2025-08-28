import { HttpClient } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { LoginUserResponse, User, UserRegistrationModel } from "../models/User/User.modal";
import { CurrentUserService } from "./currentUser.service";
import { UserResponse } from "../models/User/UserResponce";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://localhost:7265/api/user';

  constructor(private http: HttpClient, private currentUserService: CurrentUserService) { }

  // ======================== Users ========================
  getAllUsers(
    sort: string,
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
  ): Observable<UserResponse> {
    const url = `${this.apiUrl}/getUsers?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
    return this.http.get<UserResponse>(url);
  }

  signUp(formData: FormData): Observable<UserRegistrationModel> {
    return this.http.post<UserRegistrationModel>(`${this.apiUrl}/signup`, formData);
  }

  login(loginDto: any): Observable<LoginUserResponse> {
    return this.http.post<LoginUserResponse>(`${this.apiUrl}/login`, loginDto, {
      responseType: 'json'
    }).pipe(
      tap({
        next: (res) => {
          if (typeof window !== 'undefined') {
            const user: User = {
              id: res.id,
              username: res.fullName,
              token: res.token,
              isAdmin: res.isAdmin
            };
            this.currentUserService.setCurrentUser(user);
          }
        }
      })
    );
  }

  // ======================== Save User ========================
  saveUserDetails(loginUserResponse: LoginUserResponse) {
    if (typeof window !== 'undefined') {
      const user: User = {
        id: loginUserResponse.id,
        username: loginUserResponse.fullName,
        token: loginUserResponse.token,
        isAdmin: loginUserResponse.isAdmin
      };
      this.currentUserService.setCurrentUser(user);
    }
  }
   // ======================== Logout ========================
logout(): Observable<any> {
  const currentUser = this.currentUserService.currentUserSubject.value;
  if (!currentUser || !currentUser.token) {
    return new Observable(observer => {
      observer.next({ message: 'No user logged in' });
      observer.complete();
    });
  }

  const headers = { 'Authorization': `${currentUser.token}` };
 console.log(headers);
  return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
    tap(() => {
      this.currentUserService.clearCurrentUser();
    })
  );
}
}
