  import { Component } from '@angular/core';
  import { AuthService } from '../../../../../services/auth.service';
import { LoginUserResponse } from '../../../../../models/User/User.modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone:false
})
export class SignInComponent {
loginDto = {
  Email: '',
  Password: ''
};

constructor(
  private _authService: AuthService,
  private router: Router,
private toastr: ToastrService) { }

onSubmit() {
  const payload = {
    Email: this.loginDto.Email,
    Password: this.loginDto.Password
  };

  this._authService.login(payload).subscribe(
    (response: LoginUserResponse) => {
      // this._authService.saveUserDetails(response);

    this.toastr.success('Welcome back!', 'Login Successful!');
    this.router.navigateByUrl('/dashboard/home');
     
    },
    (error) => {
      console.error('Login failed:', error);
    this.toastr.error('Invalid email or password', 'Login Failed!');
    }
  );
}


}
