import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsightService } from '../../../../../../services/Insight.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-insight',
    standalone: false,
  templateUrl: './create-insight.component.html',
  styleUrl: './create-insight.component.css'
})
export class CreateInsightComponent implements OnInit {
  createForm!: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private insightService: InsightService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      title_ar: ['', Validators.required],
      category: ['', Validators.required],
      category_ar: ['', Validators.required],
      description: ['', Validators.required],
      description_ar: ['', Validators.required],
      linkPost: ['', Validators.required],
      linkPostSecondary: [''],
      publishedDate: ['', Validators.required],
      imagePath: [null, Validators.required] 
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
      this.createForm.patchValue({ imagePath: file });
    }
  }

onSubmit() {
  if (this.createForm.valid) {
    const formData = new FormData();
    
    // تعبئة البيانات النصية
    formData.append('title', this.createForm.get('title')?.value);
    formData.append('title_ar', this.createForm.get('title_ar')?.value);
    formData.append('category', this.createForm.get('category')?.value);
    formData.append('category_ar', this.createForm.get('category_ar')?.value);
    formData.append('description', this.createForm.get('description')?.value);
    formData.append('description_ar', this.createForm.get('description_ar')?.value);
    formData.append('linkPost', this.createForm.get('linkPost')?.value);
    
    const linkPostSecondary = this.createForm.get('linkPostSecondary')?.value;
    if (linkPostSecondary) {
      formData.append('linkPostSecondary', linkPostSecondary);
    }

    formData.append('publishedDate', this.createForm.get('publishedDate')?.value);

    const imageValue = this.createForm.get('imagePath')?.value;
    if (imageValue instanceof File) {
      formData.append('ImageFile', imageValue); 
    }

    this.insightService.createInsight(formData).subscribe({
      next: (res) => {
        this.toastr.success('The insight has been added successfully', 'Insight Added!');
        this.router.navigateByUrl('/dashboard/Insights');
      },
      error: (err) => {
        let errorMsg = 'Create failed. Please try again.';
        if (typeof err.error === 'string') {
          errorMsg = err.error;
        } else if (err.error?.message) {
          errorMsg = err.error.message;
        }
        this.toastr.error(errorMsg, 'Add Failed!');
      }
    });
  } else {
    this.createForm.markAllAsTouched();
    this.toastr.warning('Please fill all required fields.', 'Validation Error');
  }
}
}
