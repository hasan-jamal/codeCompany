import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../../../../services/news.service';
import { NewsInterface } from '../../../../../../models/News/News';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  standalone: false,
  
})
export class UpdateComponent implements OnInit{
updateForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
storyId!: number;
newsDetails: NewsInterface | null = null;
hashtagsString = '';
newHashtag: string = '';
  safeDescription: SafeHtml | null = null;
constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private _newsService: NewsService,
  private toastr: ToastrService,
  private router: Router,
   private sanitizer: DomSanitizer
) {}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idParam = params.get('id');
    if (idParam) {
      this.storyId = +idParam;
      this.getDetails();
    } else {
      this.initForm();
    }
  });
}

initForm(data?: any) {
  const defaultData = data || {
    title: '',
    description: '',
    title_ar: '',
    description_ar: '',
    phone: '',
    imageService: '',
    hashtags: [] as string[]
  };

  const cleanTags = (defaultData.hashtags || []).map((t: string) => t.replace(/^#+/, ''));

  this.updateForm = this.fb.group({
    title: [defaultData.title],
    description: [defaultData.description],
    title_ar: [defaultData.title_ar],
    description_ar: [defaultData.description_ar],
    phone: [defaultData.phone],
    imageService: [defaultData.imageService],
    hashtags: [cleanTags],
    newHashtag: ['']
  });
}
private normalizeTag(value: string): string {
  const cleaned = (value || '').trim().replace(/^#+/, '');
  return cleaned;
}
addHashtag(event: Event) {
  event.preventDefault();
  const raw = this.updateForm.get('newHashtag')?.value || '';
  const tag = this.normalizeTag(raw);
  if (!tag) { return; }

  const list: string[] = this.updateForm.get('hashtags')?.value || [];
  if (!list.includes(tag)) {
    list.push(tag);
    this.updateForm.get('hashtags')?.setValue(list);
  }
  this.updateForm.get('newHashtag')?.reset('');
}

removeHashtag(index: number) {
  const list: string[] = this.updateForm.get('hashtags')?.value || [];
  list.splice(index, 1);
  this.updateForm.get('hashtags')?.setValue(list);
}
getDetails(): void {
  this._newsService.getNewsDetails(this.storyId).subscribe({
    next: (data) => {
      this.newsDetails = data;
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
    formData.append('id', this.storyId.toString());
    formData.append('title', this.updateForm.get('title')?.value);
    formData.append('description', this.updateForm.get('description')?.value);
    formData.append('title_ar', this.updateForm.get('title_ar')?.value);
    formData.append('description_ar', this.updateForm.get('description_ar')?.value);
    formData.append('phone', this.updateForm.get('phone')?.value);
    const hashtags: string[] = this.updateForm.get('hashtags')?.value || [];
    formData.append('hashtags', hashtags.join(','));

    const imageValue = this.updateForm.get('imageService')?.value;
    console.log('Image Value:', imageValue);
    if (imageValue instanceof File) {
      formData.append('imageUrl', imageValue);
    }

    this._newsService.updateNews(this.storyId, formData).subscribe({
      next: (res) => {
        this.toastr.success('The item has been updated successfully', 'Item Updated!');
        this.router.navigateByUrl('/dashboard/news');
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
