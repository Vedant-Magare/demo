import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  constructor(private userService: UserService) {}

  contact = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    recipientEmail: '',
  };

  sendMessage() {
    this.contact['recipientEmail'] = 'admin-email@example.com'; // Add recipient email

    this.userService.sendMessage(this.contact).subscribe(
      (response: any) => {
        alert('Message sent successfully!');
        this.resetForm();
      },
      (error) => {
        alert('Error sending message.');
        console.error(error); // Log error for debugging
      }
    );
  }

  resetForm() {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      recipientEmail: '',
    };
  }
}
