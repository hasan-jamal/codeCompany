import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubServiceService } from '../../../../../../services/subService.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ServiceInterface } from '../../../../../../models/Service/Service.modal';
import { ServiceService } from '../../../../../../services/service.service';
import { ServiceResponse } from '../../../../../../models/Service/Service.Response';

@Component({
  selector: 'app-create-sub-service',
  standalone:false,
  templateUrl: './create-sub-service.component.html',
  styleUrl: './create-sub-service.component.css'
})
export class CreateSubServiceComponent implements OnInit{
createSubServiceForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
storyId!: number;
services: ServiceInterface[] = [];
  selectedSort: string = '';
  searchText: string = '';
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(
  private fb: FormBuilder,
  private _subServiceService: SubServiceService,
  private toastr: ToastrService,
  private router: Router,
  private serviceService: ServiceService
) {}
  private normalizeTag(value: string): string {
  const cleaned = (value || '').trim().replace(/^#+/, '');
  return cleaned;
}

  ngOnInit(): void {
    this.createSubServiceForm = this.fb.group({
      title: ['', Validators.required],
      title_ar: ['', Validators.required],
      serviceBrief: [''],
      serviceBrief_ar: [''],
      serviceId: ['', Validators.required],
      imageService: [null]
    });
    this.serviceService.getAllServices((this.selectedSort, this.currentPage, this.pageSize, this.searchText)).subscribe({
      next: (data: ServiceResponse) => {
        this.services = data.service.data;
      },
      error: () => {
        this.toastr.error('Failed to load services');
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
    this.createSubServiceForm.patchValue({ imageService: file });
  }
}

  onSubmit() {
    if (this.createSubServiceForm.valid) {
      const formData = new FormData();
      formData.append('title', this.createSubServiceForm.get('title')?.value);
      formData.append('title_ar', this.createSubServiceForm.get('title_ar')?.value);
      formData.append('serviceBrief', this.createSubServiceForm.get('serviceBrief')?.value || '');
      formData.append('serviceBrief_ar', this.createSubServiceForm.get('serviceBrief_ar')?.value || '');
      formData.append('serviceId', this.createSubServiceForm.get('serviceId')?.value);

      const imageValue = this.createSubServiceForm.get('imageService')?.value;
      if (imageValue instanceof File) {
        formData.append('imageService', imageValue);
      }

      this._subServiceService.createSubService(formData).subscribe({
        next: (res) => {
          this.toastr.success('The sub-service has been created successfully', 'Success!');
          this.router.navigateByUrl('/dashboard/services');
        },
        error: (err) => {
          let errorMsg = '';
          if (typeof err.error === 'string') {
            errorMsg = err.error;
          } else if (err.error?.message) {
            errorMsg = err.error.message;
          } else {
            errorMsg = 'Create failed. Please try again.';
          }
          this.toastr.error(errorMsg, 'Error!');
        }
      });
    } else {
      this.toastr.warning('Please fill all required fields');
    }
  }
}
