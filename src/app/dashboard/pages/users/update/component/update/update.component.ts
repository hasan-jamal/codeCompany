import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../../../services/user.service';
import { UpdateUserProfileVM } from '../../../../../../models/User/User.modal';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateProfileComponent implements OnInit{
updateForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
userId!: number;
updateUserProfileVM: UpdateUserProfileVM | null = null;

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private _userService: UserService,
  private toastr: ToastrService,
  private router: Router
) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam) {
      this.userId = +idParam;
      this.getDetails();
    } else {
      this.initForm();
    }
  });
}

initForm(data?: UpdateUserProfileVM) {
  const defaultData = data || {
    id: 0,
    fullName: '',
    password: '',
    phoneNumber: '',
    imageUrl: '',
    dateOfBirth: '',
    gender: 1,
    email: '',
    city: ''
  };

  this.updateForm = this.fb.group({
    id: [defaultData.id],
    fullName: [defaultData.fullName],
    password: [defaultData.password],
    phoneNumber: [defaultData.phoneNumber],
    imageUrl: [defaultData.imageUrl],
    dateOfBirth: [defaultData.dateOfBirth],
    gender: [defaultData.gender],
    email: [defaultData.email],
    city: [defaultData.city]
  });
}

getDetails(): void {
  this._userService.getUserDetails(this.userId).subscribe({
    next: (data) => {
      this.updateUserProfileVM = data;
      this.userId = data.id;
      this.initForm(data);
      
      if (data.imageUrl) {
        this.imagePreview = `https://localhost:7265/images/${data.imageUrl}`;
      }
    },
    error: (err) => {
      console.error('Error fetching user details:', err);
      this.initForm();
    }
  });
}
onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
    this.updateForm.patchValue({ imageUrl: file });
  }
}
onSubmit() {
  if (this.updateForm.valid) {
    const formData = new FormData();
    formData.append('id', this.userId.toString());
    formData.append('fullName', this.updateForm.get('fullName')?.value);
    formData.append('password', this.updateForm.get('password')?.value);
    formData.append('phoneNumber', this.updateForm.get('phoneNumber')?.value);
    formData.append('dateOfBirth', this.updateForm.get('dateOfBirth')?.value);
    formData.append('city', this.updateForm.get('city')?.value);
    formData.append('email', this.updateForm.get('email')?.value);
    formData.append('gender', this.updateForm.get('gender')?.value);

    const imageValue = this.updateForm.get('imageUrl')?.value;
    if (imageValue instanceof File) {
      formData.append('imageUrl', imageValue);
    }

    this._userService.updateProfile(formData).subscribe({
      next: () => {
        this.toastr.success('The user profile has been updated successfully.', 'Update Successful!');
        this.router.navigate(['/dashboard/users']);
      },
      error: (err) => {
        console.error('Update failed:', err);
        this.toastr.error(err.error.message || 'Something went wrong.', 'Update Failed!');
      }
    });
  }
}


}
