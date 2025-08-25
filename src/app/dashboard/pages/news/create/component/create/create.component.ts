import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../../../../services/news.service';
import { NewsInterface } from '../../../../../../models/News/News';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
  standalone: false,
})
export class CreateComponent  implements OnInit {
createForm!: FormGroup;
imagePreview: string | ArrayBuffer | null = null;
storyId!: number;
newsDetails: NewsInterface | null = null;
hashtagsString = '';
newHashtag: string = '';

  constructor(
  private fb: FormBuilder,
  private route: ActivatedRoute,
  private _newsService: NewsService,
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
addHashtag(event: Event) {
  event.preventDefault();
  const raw = this.createForm.get('newHashtag')?.value || '';
  const tag = this.normalizeTag(raw);
  if (!tag) { return; }

  const list: string[] = this.createForm.get('hashtags')?.value || [];
  if (!list.includes(tag)) {
    list.push(tag);
    this.createForm.get('hashtags')?.setValue(list);
  }
  this.createForm.get('newHashtag')?.reset('');
}
removeHashtag(index: number) {
  const list: string[] = this.createForm.get('hashtags')?.value || [];
  list.splice(index, 1);
  this.createForm.get('hashtags')?.setValue(list);
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
    const descriptionHtml = this.createForm.get('description')?.value;
    formData.append('description', descriptionHtml);


    formData.append('title_ar', this.createForm.get('title_ar')?.value);
    const descriptionArHtml = this.createForm.get('description_ar')?.value;
    formData.append('description_ar', descriptionArHtml);
    formData.append('phone', this.createForm.get('phone')?.value);
    const hashtags: string[] = this.createForm.get('hashtags')?.value || [];
    formData.append('hashtags', hashtags.join(','));

    const imageValue = this.createForm.get('imageService')?.value;
    console.log('Image Value:', imageValue);
    if (imageValue instanceof File) {
      formData.append('imageUrl', imageValue);
    }

    this._newsService.createNews(formData).subscribe({
      next: (res) => {
        this.toastr.success('The item has been Added successfully', 'Item Added!');
        this.router.navigateByUrl('/dashboard/news');
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
