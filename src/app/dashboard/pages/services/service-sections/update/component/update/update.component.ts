import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UpdateServiceSectionsDto } from '../../../../../../../models/Service/Service.modal';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceSectionsService } from '../../../../../../../services/serviceSections.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateServiceSectionComponent implements OnInit{
updateForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
serviceSectionId!: number;
serviceSectionDetails: UpdateServiceSectionsDto | null = null;
serviceId!: number | undefined;

constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private _serviceSectionService: ServiceSectionsService,
  private toastr: ToastrService,
  private router: Router
) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam) {
      this.serviceSectionId = +idParam;
      this.getDetails();
    } else {
      this.initForm();
    }
  });
}

initForm(data?: any) {
  const defaultData = data || {
    id: 0,
    title: '',
    title_ar: '',
    subtitle: '',
    subtitle_ar: '',
    description: '',
    description_ar: '',
    imageUrl: ''
  };

  this.updateForm = this.fb.group({
    title: [defaultData.title],
    title_ar: [defaultData.title_ar],
    subtitle: [defaultData.subtitle],
    subtitle_ar: [defaultData.subtitle_ar],
    description: [defaultData.description],
    description_ar: [defaultData.description_ar],
    imageUrl: [defaultData.imageUrl]
  });
}
getDetails(): void {
  this._serviceSectionService.getServiceSectionDetails(this.serviceSectionId).subscribe({
    next: (data) => {
      this.serviceSectionDetails = data;
      this.serviceId = data.serviceId;
      this.initForm(data);
      
      if (data.imageUrl) {
        this.imagePreview = `https://localhost:7265/images/${data.imageUrl}`;
      }
    },
    error: (err) => {
      console.error('Error fetching service section details:', err);
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
    formData.append('id', this.serviceSectionId.toString());
    formData.append('title', this.updateForm.get('title')?.value);
    formData.append('title_ar', this.updateForm.get('title_ar')?.value);
    formData.append('subtitle', this.updateForm.get('subtitle')?.value);
    formData.append('subtitle_ar', this.updateForm.get('subtitle_ar')?.value);
    formData.append('description', this.updateForm.get('description')?.value);
    formData.append('description_ar', this.updateForm.get('description_ar')?.value);

    const imageValue = this.updateForm.get('imageUrl')?.value;
    console.log('Image Value:', imageValue);
    if (imageValue instanceof File) {
      formData.append('imageUrl', imageValue);
    }
    this._serviceSectionService.updateServiceSection(formData).subscribe({
      next: (res) => {
        this.toastr.success('The service section has been updated successfully', 'Update Successful!');
        if (this.serviceId) {
          this.router.navigate([`/dashboard/services/tableSections/${this.serviceId}`]);
        }
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Update Failed!');
        console.error('Update failed:', err);
      }
    });
  }
}

}
