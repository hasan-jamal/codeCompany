  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { AuthService } from '../../../../../services/auth.service';
  import Swal from 'sweetalert2';
import { LoginUserResponse } from '../../../../../models/User/User.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
  standalone:false
})
export class SignInComponent {
loginDto = {
  PhoneNumber: '',
  Password: ''
};

constructor(private _authService: AuthService,private router: Router) { }

onSubmit() {
  const payload = {
    PhoneNumber: this.loginDto.PhoneNumber.toString(),
    Password: this.loginDto.Password
  };

  this._authService.login(payload).subscribe(
    (response: LoginUserResponse) => {
      this._authService.saveUserDetails(response);

         Swal.fire({
        title: `Welcome! ${response.fullName}`,
        icon: "success",
        draggable: true
      }).then(() => {
        this.router.navigateByUrl('/dashboard/home');
      });
    },
    (error) => {
      console.error('Login failed:', error);
      Swal.fire({
        title: error.error?.message || 'Login failed',
        icon: "error"
      });
    }
  );
}


}
