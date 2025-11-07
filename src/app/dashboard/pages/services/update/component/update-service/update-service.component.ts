import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ServiceService } from '../../../../../../services/service.service';
import { ServiceInterface } from '../../../../../../models/Service/Service.modal';

@Component({
  selector: 'app-update-service',
  standalone: false,
  templateUrl: './update-service.component.html',
  styleUrl: './update-service.component.css'
})
export class UpdateServiceComponent implements OnInit{
updateForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
serviceId!: number;
serviceDetails: ServiceInterface | null = null;
hashtagsString = '';
newHashtag: string = '';
safeDescription: SafeHtml | null = null;
constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private _serviceService: ServiceService,
  private toastr: ToastrService,
  private router: Router,
   private sanitizer: DomSanitizer
) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam) {
      this.serviceId = +idParam;
      this.getDetails();
    } else {
      this.initForm();
    }
  });
}

initForm(data?: any) {
  const defaultData = data || {
    title: '',
    title_ar: '',
    imageService: '',
  };


  this.updateForm = this.fb.group({
    title: [defaultData.title],
    title_ar: [defaultData.title_ar],
    imageService: [defaultData.imageService],
    newHashtag: ['']
  });
}
private normalizeTag(value: string): string {
  const cleaned = (value || '').trim().replace(/^#+/, '');
  return cleaned;
}

getDetails(): void {
  this._serviceService.getServiceDetails(this.serviceId).subscribe({
    next: (data) => {
      this.serviceDetails = data;
      this.initForm(data); 
      if (data.imageService) {
        this.imagePreview = `https://localhost:7265/images/${data.imageService}`;
      }
    },
    error: (err) => {
      console.error('Error fetching news details:', err);
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
    this.updateForm.patchValue({ imageService: file });
  }
}
onSubmit() {
  if (this.updateForm.valid) {
    const formData = new FormData();
    formData.append('id', this.serviceId.toString());
    formData.append('title', this.updateForm.get('title')?.value);
    formData.append('title_ar', this.updateForm.get('title_ar')?.value);
    const imageValue = this.updateForm.get('imageService')?.value;
    console.log('Image Value:', imageValue);
    if (imageValue instanceof File) {
      formData.append('imageService', imageValue);
    }

    this._serviceService.updateService(formData).subscribe({
      next: (res) => {
        this.toastr.success('The item has been updated successfully', 'Item Updated!');
        this.router.navigateByUrl('/dashboard/services');
        console.log(res);
      },
      error: (err) => {
      this.toastr.error(err.error.message, 'Update Failed!');

        let errorMsg = '';
        if (typeof err.error === 'string') {
          errorMsg = err.error;
        } else if (err.error?.message) {
          errorMsg = err.error.message;
        } else {
          errorMsg = 'Update failed. Please try again.';
        }
      }
    });
  }
}


}
