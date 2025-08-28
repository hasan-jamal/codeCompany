import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserInterface } from '../../../../../../models/User/User.modal';
import { UserResponse } from '../../../../../../models/User/UserResponce';
import { UserService } from '../../../../../../services/user.service';
import { CurrentUserService } from '../../../../../../services/currentUser.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  standalone: false
})
export class TableComponent implements OnInit {
  response: UserResponse | undefined;
  selectedSort: string = '';
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  newsDetails!: UserInterface;
  newsId: number; 
  isDeleteModalOpen = false;
  userToDelete!: UserInterface;
  constructor(
    private _userService: UserService,
    private toastr: ToastrService,
    private currentUserService: CurrentUserService
  ) {}

   ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
  this._userService.getAllUsers(this.selectedSort, this.currentPage, this.pageSize, this.searchText)
    .subscribe({
      next: (data) => {
        this.response = data;
        if (data?.user?.pagination) {
          this.totalPages = data.user.pagination.pageCount;
          this.currentPage = data.user.pagination.currentPage;
        } else {
          this.totalPages = 0;
        }
      },
      error: (err) => {
        console.error('Error loading users:', err);
      },
    });
}

changeDeactivation(userId: number, user: any) {
  this._userService.changeAvailable(userId).subscribe({
    next: (res) => {
      this.toastr.success('The user has been activated successfully', 'User Activated');
      user.active = true; 
      this.getUsers();
    },
    error: (err) => {
      console.log(err);
      this.toastr.error('You do not have permission to lock a user!', 'No Permission !!');
    }
  });
}

changeActivation(userId: number, user: any) {
  this._userService.changeNotAvailable(userId).subscribe({
    next: (res) => {
      this.toastr.success('The user has been deactivated successfully', 'User Deactivated');
      user.active = false; 
      this.getUsers();
    },
    error: (err) => {
      this.toastr.error('You do not have permission to lock a user!', 'No Permission !!');
    }
  });
}

  openDeleteModal(user: UserInterface) {
    this.userToDelete = user;
    this.isDeleteModalOpen = true;
  }

  closeDeleteModal() {
    this.isDeleteModalOpen = false;
  }
  confirmDelete() {
    if (!this.userToDelete) return;
    console.log(this.userToDelete);
    this._userService.deleteUser(this.userToDelete.id).subscribe({
  next: () => {
    this.toastr.success('The user has been deleted successfully', 'Success');
    this.getUsers();
    this.closeDeleteModal();
  },
  error: (err) => {
    this.toastr.error('An error occurred while deleting the news item', 'Error');
    console.error(err);
  }
    });
  }
  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.getUsers();
  }

}
