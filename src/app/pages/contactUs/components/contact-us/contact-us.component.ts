import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css',
                     '../../../../../assets/css/general.css',
                  '../../../../../assets/css/sections/contactSection.css',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsComponent {
  loading = false;

  formData = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };
    
  onSubmit() {
    if (
      !this.formData.fullName ||
      !this.formData.email ||
      !this.formData.subject ||
      !this.formData.message
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill out all the fields!',
      });
      return;
    }
    console.log(this.formData);
    this.loading = true;
  
    const serviceID = 'service_c3x8icv';
    const templateID = 'template_4vk6r2i';
    const userID = 'v1SPYF0nEL4iXyOD-';
  
    emailjs
      .send(
        serviceID,
        templateID,
        {
          fullName: this.formData.fullName,
          email: this.formData.email,
          subject: 'ContactUsEmail from ' + this.formData.fullName,
          message: this.formData.message,
          reply_to: this.formData.email,  // <-- مهم عشان الرد يروح للمستخدم
        },
        userID
      )
      .then(
        (response) => {
          Swal.fire({
            title: `Thank you, ${this.formData.fullName}!`,
            text: 'Your message has been sent successfully.',
            icon: 'success',
          });
  
          this.formData = {
            fullName: '',
            email: '',
            subject: '',
            message: ''
          };
  
          this.loading = false;
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
  
          this.loading = false;
        }
      );
  }
  
}
