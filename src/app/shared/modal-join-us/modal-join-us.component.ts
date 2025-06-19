import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/ModalService';

@Component({
  selector: 'app-modal-join-us',
  imports: [CommonModule,FormsModule],
    standalone: true,
  templateUrl: './modal-join-us.component.html',
  styleUrls: ['./modal-join-us.component.css',
             '../../../assets/css/general.css'],
  encapsulation: ViewEncapsulation.None,

})
export class ModalJoinUsComponent implements OnInit, OnDestroy{


  constructor(private modalService: ModalService,private http: HttpClient) {}
  isOpen = false;
  private subscription!: Subscription;
  loading = false;
  resumeFileName = '';
  resumeFile?: File;
  resumeURL: string = '';
  resumeUploading = false;
  ngOnInit() {
    this.subscription = this.modalService.openModal$.subscribe(id => {
      if (id === 'modalJoinUs') {
        this.isOpen = true;
      }
    });
  }
  close() {
    this.isOpen = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  formData = {
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    message: ''
  };
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.resumeFile = input.files[0];
      this.resumeFileName = this.resumeFile.name;
  
      const uploadData = new FormData();
      uploadData.append('file', this.resumeFile);
      uploadData.append('upload_preset', 'resumeFile');
      uploadData.append('resource_type', 'raw');

      const cloudName = 'donrt3nj4';
      const uploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/raw/upload`;
  
      this.resumeUploading = true;
  
      this.http.post(uploadURL, uploadData).subscribe({
        next: (response: any) => {
          this.resumeURL = response.secure_url;
          this.resumeUploading = false;
        },
        error: (error) => {
          console.error('Upload error:', error);
          this.resumeUploading = false;
          Swal.fire({
            icon: 'error',
            title: 'Upload Failed',
            text: 'Could not upload resume file.'
          });
        }
      });
    }
  }
  onSubmit(form: NgForm): void {
    if (form.invalid || !this.resumeURL || this.resumeUploading) {
      form.control.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: this.resumeUploading
          ? 'Please wait until the resume file finishes uploading.'
          : 'Please complete all required fields and upload your resume.'
      });
      return;
    }
  
    this.loading = true;
  
    emailjs.send(
      'service_6sstl82',
      'template_b2w6rue',
      {
        fullName: this.formData.fullName,
        email: this.formData.email,
        phone: this.formData.phone,
        linkedin: this.formData.linkedin,
        portfolio: this.formData.portfolio,
        message: this.formData.message,
        resume_url: this.resumeURL,
        reply_to: this.formData.email
      },
      'v1SPYF0nEL4iXyOD-'
    ).then(() => {
      Swal.fire({
        title: `Thank you, ${this.formData.fullName}!`,
        text: 'Your application has been sent successfully.',
        icon: 'success'
      });
      this.isOpen = false;
      form.resetForm();
      this.resumeFileName = '';
      this.resumeFile = undefined;
      this.resumeURL = '';
      this.loading = false;

      if (!this.formData.fullName) console.warn('fullName is missing:', this.formData.fullName);
      if (!this.formData.email) console.warn('email is missing:', this.formData.email);
      if (!this.formData.phone) console.warn('phone is missing:', this.formData.phone);
      if (!this.formData.linkedin) console.warn('linkedin is missing:', this.formData.linkedin);
      if (!this.formData.portfolio) console.warn('portfolio is missing:', this.formData.portfolio);
      if (!this.formData.message) console.warn('message is missing:', this.formData.message);
      if (!this.resumeURL) console.warn('resumeURL is missing:', this.resumeURL);
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: `error`,
        text: 'Something went wrong while sending your application.'
      });
      this.loading = false;
    });
  }
  onCancel(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your data will be cleared.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.formData = {
          fullName: '',
          email: '',
          phone: '',
          linkedin: '',
          portfolio: '',
          message: ''
        };
        this.resumeFileName = '';
        this.resumeFile = undefined;
        this.resumeURL = '';
      }
    });
  }

}
