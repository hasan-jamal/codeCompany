import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/component/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/component/sign-in/sign-in.component';
import { ToastrModule } from 'ngx-toastr';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    ToastrModule  
  ]
})
export class AuthenticationModule { }
