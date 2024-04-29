import { Component, inject } from '@angular/core';
import { AuthService } from '../../admin/services/auth.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [  MatCardModule,
    MatInputModule,
    MatFormFieldModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  
  authservice = inject(AuthService);
  router = inject(Router);
  applyForm: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor(private snackBar:MatSnackBar) {
    this.applyForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  get email() {
    return this.applyForm.get('email')?.value;
  }

  get password() {
    return this.applyForm.get('password')?.value;
  }

  submitApplication(event: Event) {
    event.preventDefault();
    console.log(`Login : ${this.email} / ${this.password}`);
    this.authservice.login({
      email: this.email,
      password: this.password,
    }).subscribe(
      (res) => {
        this.snackBar.open('login successful!', 'Close', {
          duration: 3000, // Duration the snackbar is displayed in milliseconds
        });
   
        //console.log(this.authservice.decodeToken(res.access_token).sub);
        let rese = this.authservice.decodeToken(res.access_token).sub;
        
       
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login error:', error);
        this.snackBar.open('login failed', 'Close', {
          duration: 3000, // Duration the snackbar is displayed in milliseconds
        });
      }
    );
  }

  
}
