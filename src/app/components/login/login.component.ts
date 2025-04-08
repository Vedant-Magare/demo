import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private userService: UserService , private router:Router) {}

  user = {
    email: '',
    password: '',
  };

  errorMessage = ''; // Error message for invalid login
  emailError = ''; // Error message for email validation
  passwordError = ''; // Error message for password validation

  validateEmail(): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!this.user.email) {
      this.emailError = 'Email is required';
      return false;
    } else if (!emailPattern.test(this.user.email)) {
      this.emailError = 'Enter a valid @gmail.com email';
      return false;
    }
    this.emailError = '';
    return true;
  }

  validatePassword(): boolean {
    const passwordPattern =
      /^(?=(.*[A-Za-z]){6,8})(?=.*[0-9]{4,})(?=.*[@])[A-Za-z0-9@]+$/;

    if (!this.user.password) {
      this.passwordError = 'Password is required';
      return false;
    } else if (!passwordPattern.test(this.user.password)) {
      this.passwordError =
        'Password must be 6-8 alphabets, include @, and have 4+ numbers';
      return false;
    }

    this.passwordError = '';
    return true;
  }

  addUser() {
    if (!this.validateEmail() || !this.validatePassword()) {
      return; // Stop submission if validation fails
    }

    this.userService.addUser(this.user).subscribe(
      (response) => {
        console.log('Login successful', response);
        alert('Login successful');
        this.errorMessage = '';
        this.user = { email: '', password: '' }; // Reset form on success
      },
      (error) => {
        console.log('Login failed', error);
        this.errorMessage = 'Invalid email or password'; // Show error message
      }
    );
  }
  // Function to Navigate to Forgot Password Page
  goToForgotPassword() {
    if (!this.user.email) {
      alert('Please enter your email first!');
      return;
    }

    // Save email in localStorage (Optional)
    localStorage.setItem('email', this.user.email);

    // Navigate to Forgot Password Page with Email
    this.router.navigate(['/forgot-password'], {
      queryParams: { email: this.user.email },
    });
  }
}
