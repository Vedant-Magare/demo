import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent {
  constructor(private userService: UserService) {}

  user = {
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    birthDate: '',
  };

  registerUser() {
    // ✅ Validate if all fields are filled
    if (!this.user.name || !this.user.email || !this.user.phone || !this.user.address || !this.user.education || !this.user.birthDate) {
      alert('All fields are required!');
      return;
    }

    // ✅ Validate email format
    if (!this.validateEmail()) {
      alert('Invalid email format! Email must be in lowercase and end with @gmail.com');
      return;
    }

    // ✅ Validate phone number length
    if (this.user.phone.length !== 10) {
      alert('Phone number must be exactly 10 digits!');
      return;
    }

    this.userService.registerUser(this.user).subscribe(
      (response: any) => {
        console.log('Response from backend:', response);

        // ✅ Success Message
        alert('Registration Successful!');

        // ✅ Reset form after success
        setTimeout(() => this.resetForm(), 500);
      },
      (error) => {
        console.error('Error received:', error);

        // ✅ Error Message Handling
        if (error.status === 409) {
          alert('Email already in use. Try another email.');
        } else {
          alert('An unexpected error occurred. Please try again.');
        }
      }
    );
  }

  resetForm() {
    this.user = {
      name: '',
      email: '',
      phone: '',
      address: '',
      education: '',
      birthDate: '',
    };
  }

  // ✅ Auto-capitalize first letter of Full Name
  formatName() {
    if (this.user.name) {
      this.user.name = this.user.name
        .toLowerCase()
        .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  }

  // ✅ Validate Email Format (Lowercase & Ends with @gmail.com)
  validateEmail(): boolean {
    const emailPattern = /^[a-z0-9]+@gmail\.com$/;
    return emailPattern.test(this.user.email);
  }

  // ✅ Restrict Phone Number Length to 10 Digits
  validatePhone() {
    if (this.user.phone.length > 10) {
      this.user.phone = this.user.phone.slice(0, 10);
    }
  }
}
