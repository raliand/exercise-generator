import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(this.auth, provider);
      this.navigateToDashboard();
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error during Google Sign-In:', error.message);
      }else{
        console.error('Error during Google Sign-In:', error);
      }
      // Handle the error appropriately, e.g., display a message to the user.
    }
  }

  private navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}

