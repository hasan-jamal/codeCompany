import { HttpClient } from "@angular/common/http";
import { Observable, map, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { UserResponce } from "../models/User/UserResponce";
import { LoginUserResponse, UserRegistrationModel } from "../models/User/User.modal";

@Injectable({ providedIn: 'root' }) 

export class AuthService {
  private apiUrl = 'https://localhost:7265/api/user';
  public name:string|null = null;
  public isAdmin:boolean;
  public image:string|null = null;
  constructor(private http: HttpClient) { }

  getAllUsers(
    sort: string,
    page: number = 1,
    pageSize: number = 10,
    searchText: string = '',
  ): Observable<UserResponce> {
    const url = `${this.apiUrl}/getUsers?sort=${sort}&page=${page}&pageSize=${pageSize}&searchText=${searchText}`;
    return this.http.get<UserResponce>(url);
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
          this.isAdmin = res.isAdmin;
          this.name = res.fullName;
        }
      })
    );
  }
  saveUserDetails(loginUserResponse : any){
    for(let a in loginUserResponse){
      localStorage.setItem(a, loginUserResponse[a]);
    }
    this.image = loginUserResponse.image;
    this.name = loginUserResponse.fullName;
    this.isAdmin  = loginUserResponse.isAdmin;
    if (this.name) {
      const firstName = this.name.split(' ')[0];
      this.name =`Hello ${firstName}` ;
    }
  }


}