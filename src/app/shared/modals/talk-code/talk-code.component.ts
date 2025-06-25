import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ModalService } from '../../../services/ModalService';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-talk-code',
  imports: [CommonModule,FormsModule],
  templateUrl: './talk-code.component.html',
  styleUrl: './talk-code.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TalkCodeComponent  implements OnInit,OnDestroy{
  loading = false;
  isOpen = false;
  formData = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };
  private subscription!: Subscription;
  constructor(private modalService: ModalService,private http: HttpClient) {}
  ngOnInit() {
    this.subscription = this.modalService.openModal$.subscribe(id => {
      if (id === 'modalTalkCode') {
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
  onSubmit(form: NgForm) {
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
          subject: this.formData.fullName,
          message: this.formData.message,
          reply_to: this.formData.email,
        },
        userID
      )
      .then(
        () => {
          Swal.fire({
            title: `Thank you, ${this.formData.fullName}!`,
            text: 'Your message has been sent successfully.',
            icon: 'success',
          });
          form.resetForm(); 
  
          this.loading = false;
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
  
          this.loading = false;
        }
      );
  }

onCancel(form: NgForm): void {
  form.resetForm(); 
  this.isOpen = false;
}
}
