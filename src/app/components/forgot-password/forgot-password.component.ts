import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // user = {
  //   email: '', // Will be pre-filled from login page
  //   newPassword: '',
  // };
  user = {
    email: '',
    password: '',  // ✅ Change "newPassword" to "password"
  };

  errorMessage = ''; // Error message for invalid email
  successMessage = ''; // Success message after updating password
  passwordError = ''; // Error message for password validation

  // On Page Load: Get Email from URL or Local Storage
  ngOnInit() {
    this.user.email =
      this.route.snapshot.queryParamMap.get('email') ||
      localStorage.getItem('email') ||
      '';
  }

  // Validate Password
  validatePassword(): boolean {
    const passwordPattern =
      /^(?=(?:[^A-Za-z]*[A-Za-z]){6,8})(?=(?:[^0-9]*[0-9]){4,})(?=[^@]*[@][^@]*$)[A-Za-z0-9@]{6,15}$/;

    if (!this.user.password) {
      this.passwordError = 'Password is required';
      return false;
    } else if (!passwordPattern.test(this.user.password)) {
      this.passwordError =
        'Password must be 6-8 alphabets, at least 4 numbers, and exactly 1 @ symbol (6-15 chars total)';
      return false;
    }

    this.passwordError = '';
    return true;
  }

  // Reset Password Function
  resetPassword() {
    if (!this.validatePassword()) {
      return; // Stop if validation fails
    }

    this.userService.resetPassword(this.user).subscribe(
      (response) => {
        console.log('Password updated successfully', response);
        this.successMessage = 'Password updated successfully! Redirecting...';
        this.errorMessage = '';

        // Redirect to login page after 3 seconds
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);
      },
      (error) => {
        console.log('Error updating password', error);
        this.errorMessage = 'Failed to reset password. Try again!';
        this.successMessage = '';
      }
    );
  }
}
