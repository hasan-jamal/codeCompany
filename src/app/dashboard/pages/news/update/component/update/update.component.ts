import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  standalone: false,
  
})
export class UpdateComponent implements OnInit{
  updateForm!: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;



  hashtagsString = ''; 
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const data = {
      title: 'Example Title',
      description: 'Example Description EN',
      title_ar: 'مثال على العنوان',
      description_ar: 'مثال على الوصف',
      phone: '+970123456',
      imageService: 'https://example.com/image.jpg',
      hashtags: ['#AI', '#DataScience']
    };

    this.hashtagsString = data.hashtags.join(',');

    this.updateForm = this.fb.group({
      title: [data.title],
      description: [data.description],
      title_ar: [data.title_ar],
      description_ar: [data.description_ar],
      phone: [data.phone],
      imageService: [data.imageService],
      hashtags: [data.hashtags]
    });
  }

  onHashtagsChange(event: any) {
    const value = event.target.value;
    this.hashtagsString = value;
    const hashtagsArray = value.split(',').map((h: string) => h.trim()).filter((h: string) => h);
    this.updateForm.get('hashtags')?.setValue(hashtagsArray);
  }

  onSubmit() {
    if (this.updateForm.valid) {
      console.log('Form Data:', this.updateForm.value);
      // هنا ترسل البيانات للـ backend
    }
  }
  onFileSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    // عمل preview للصورة مباشرة
    const reader = new FileReader();
    reader.onload = e => this.imagePreview = reader.result;
    reader.readAsDataURL(file);

    // يمكن رفع الملف للـ backend لاحقاً
    // هنا نضعه كقيمة مؤقتة للفورم
    this.updateForm.patchValue({ imageService: file });
  }
}
}
