import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsightDto } from '../../../../../../models/Insight/Insight.modal';
import { ActivatedRoute, Router } from '@angular/router';
import { InsightService } from '../../../../../../services/Insight.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-insight',
    standalone: false,
  templateUrl: './update-insight.component.html',
  styleUrl: './update-insight.component.css'
})
export class UpdateInsightComponent implements OnInit {
  updateForm!: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  insightId!: number;
  insightDetails: InsightDto | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private insightService: InsightService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.insightId = +idParam;
        this.getDetails();
      }
    });
  }

  initForm(data?: any) {
    const defaultData = data || {};

    this.updateForm = this.fb.group({
      title: [defaultData.title || '', Validators.required],
      title_ar: [defaultData.title_ar || '', Validators.required],
      category: [defaultData.category || '', Validators.required],
      category_ar: [defaultData.category_ar || '', Validators.required],
      description: [defaultData.description || '', Validators.required],
      description_ar: [defaultData.description_ar || '', Validators.required],
      linkPost: [defaultData.linkPost || '', Validators.required],
      linkPostSecondary: [defaultData.linkPostSecondary || ''],
      publishedDate: [this.formatDateForInput(defaultData.publishedDate) || '', Validators.required],
      imagePath: [null]
    });
  }

  getDetails(): void {
    this.insightService.getInsightDetails(this.insightId).subscribe({
      next: (data) => {
        this.insightDetails = data;
        this.initForm(data); 
        if (data.imagePath) {
          this.imagePreview = `https://localhost:7265/images/${data.imagePath}`;
        }
      },
      error: (err) => {
        console.error('Error fetching insight details:', err);
        this.toastr.error('Failed to load insight data.', 'Error');
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
      this.updateForm.patchValue({ imagePath: file });
    }
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const formData = new FormData();
      
      formData.append('id', this.insightId.toString());
      
      formData.append('title', this.updateForm.get('title')?.value);
      formData.append('title_ar', this.updateForm.get('title_ar')?.value);
      formData.append('category', this.updateForm.get('category')?.value);
      formData.append('category_ar', this.updateForm.get('category_ar')?.value);
      formData.append('description', this.updateForm.get('description')?.value);
      formData.append('description_ar', this.updateForm.get('description_ar')?.value);
      formData.append('linkPost', this.updateForm.get('linkPost')?.value);
      
      const linkPostSecondary = this.updateForm.get('linkPostSecondary')?.value;
      if (linkPostSecondary) {
        formData.append('linkPostSecondary', linkPostSecondary);
      }
      formData.append('publishedDate', this.updateForm.get('publishedDate')?.value);

      const imageValue = this.updateForm.get('imagePath')?.value;
      if (imageValue instanceof File) {
        formData.append('ImageFile', imageValue);
      }

      this.insightService.updateInsight(formData).subscribe({
        next: (res) => {
          this.toastr.success('The insight has been updated successfully', 'Insight Updated!');
          this.router.navigateByUrl('/dashboard/Insights');
        },
        error: (err) => {
          let errorMsg = 'Update failed. Please try again.';
          if (typeof err.error === 'string') {
            errorMsg = err.error;
          } else if (err.error?.message) {
            errorMsg = err.error.message;
          }
          this.toastr.error(errorMsg, 'Update Failed!');
        }
      });
    } else {
      this.updateForm.markAllAsTouched();
      this.toastr.warning('Please fill all required fields.', 'Validation Error');
    }
  }

  private formatDateForInput(dateString: string | Date): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}
