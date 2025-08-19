  import { Component } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { AuthService } from '../../../../../services/auth.service';
import Swal from 'sweetalert2';

  @Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrl: './sign-up.component.css',
    standalone: false
  })
  export class SignUpComponent {
    registerForm: FormGroup;
    imageUrl?: File;

    genders = [
      { name: 'Male', value: 0 },
      { name: 'Female', value: 1 }
    ];

    cities = [
      { name: 'Riyadh', value: 0 },
      { name: 'Jeddah', value: 1 },
      { name: 'Makkah', value: 2 },
      { name: 'Madinah', value: 3 },
      { name: 'Dammam', value: 4 },
      { name: 'Khobar', value: 5 },
      { name: 'Tabuk', value: 6 },
      { name: 'Abha', value: 7 },
      { name: 'Jazan', value: 8 },
      { name: 'Najran', value: 9 },
      { name: 'Hail', value: 10 },
      { name: 'Buraydah', value: 11 },
      { name: 'Alahsa', value: 12 },
      { name: 'Qatif', value: 13 },
      { name: 'Yanbu', value: 14 },
      { name: 'Taif', value: 15 },
      { name: 'AlBaha', value: 16 },
      { name: 'Sakaka', value: 17 },
      { name: 'Arar', value: 18 }
    ];

    constructor(
      private fb: FormBuilder,
      private _authService:AuthService,
    ) {
      this.registerForm = this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        phoneNumber: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
          gender: [0, Validators.required],
          city: [13, Validators.required], 
      });
    }

  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.imageUrl = fileInput.files[0];
    }
  }

    onSubmit() {
      if (this.registerForm.invalid) return;
      console.log(this.registerForm.value);
      const formData = new FormData();
      formData.append('fullName', this.registerForm.value.fullName);
      formData.append('email', this.registerForm.value.email);
      formData.append('password', this.registerForm.value.password);
      formData.append('phoneNumber', this.registerForm.value.phoneNumber);
      formData.append('dateOfBirth', this.registerForm.value.dateOfBirth);
      formData.append('gender', this.registerForm.value.gender);
      formData.append('city', this.registerForm.value.city);
      // formData.append('rememberMe', this.registerForm.value.rememberMe);

      if (this.imageUrl) {
          formData.append('imageUrl', this.imageUrl!);
      }
      console.log(formData);
      this._authService.signUp(formData).subscribe({
        next: (res) => {
          this.registerForm.reset();
          this.imageUrl = undefined;
          // this.toastr.success('User registered successfully', 'Success');

            Swal.fire({
            title: "Welcome!",
            text: 'You need to wait for the admins approval',
            icon: "success",
            draggable: true
          });
          console.log(res);
        },
        error: (err) => {
              console.error('Login failed:', err);

              let errorMsg = '';
              if (typeof err.error === 'string') {
                errorMsg = err.error;
              } else if (err.error?.message) {
                errorMsg = err.error.message;
              } else {
                errorMsg = 'Login failed. Please try again.';
              }

              Swal.fire({
                title: errorMsg,
                icon: 'error'
              });
        }
      });
    }
  }
