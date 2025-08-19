import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  isServiceProvider : string| null;
  isAdmin : string| null;

  constructor(protected _authService: AuthService) {}
   ngOnInit(): void {
      this._authService.name = localStorage.getItem('fullName');
      this.isAdmin = localStorage.getItem('isAdmin');
  }
}
