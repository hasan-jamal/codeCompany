import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../../../../services/news.service';
import { NewsInterface } from '../../../../../../models/News/News';
import { ToastrService } from 'ngx-toastr';
import { ServiceInterface } from '../../../../../../models/Service/Service.modal';
import { ServiceService } from '../../../../../../services/service.service';

@Component({
  selector: 'app-create-service',
  standalone: false,
  templateUrl: './create-service.component.html',
  styleUrl: './create-service.component.css'
})
export class CreateServiceComponent implements OnInit{
createForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
storyId!: number;

  constructor(
  private fb: FormBuilder,
  private _serviceService: ServiceService,
  private toastr: ToastrService,
  private router: Router
) {}
  private normalizeTag(value: string): string {
  const cleaned = (value || '').trim().replace(/^#+/, '');
  return cleaned;
}

ngOnInit(): void {
  this.createForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    title_ar: [''],
    description_ar: [''],
    phone: [''],
    newHashtag: [''],
    hashtags: [[]],
    imageService: [null]
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
    this.createForm.patchValue({ imageService: file });
  }
}
onSubmit() {
  if (this.createForm.valid) {
    const formData = new FormData();
    formData.append('id', this.storyId?.toString());
    formData.append('title', this.createForm.get('title')?.value);
    formData.append('title_ar', this.createForm.get('title_ar')?.value);
    const imageValue = this.createForm.get('imageService')?.value;
    if (imageValue instanceof File) {
      formData.append('imageService', imageValue);
    }

    this._serviceService.createService(formData).subscribe({
      next: (res) => {
        this.toastr.success('The item has been Added successfully', 'Item Added!');
        this.router.navigateByUrl('/dashboard/services');
        console.log(res);
      },
      error: (err) => {
      this.toastr.error(err.error.message, 'Add Failed!');

        let errorMsg = '';
        if (typeof err.error === 'string') {
          errorMsg = err.error;
        } else if (err.error?.message) {
          errorMsg = err.error.message;
        } else {
          errorMsg = 'Create failed. Please try again.';
        }
      }
    });
  }
}
}
