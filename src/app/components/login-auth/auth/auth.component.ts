import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../admin/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
    ReactiveFormsModule,],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  applyForm: FormGroup;
  value = 'Clear me';
  http = inject(HttpClient);
  router = inject(Router);
  constructor(public formBiulder: FormBuilder,private authservice:AuthService, private snackBar: MatSnackBar) {
    this.applyForm = this.formBiulder.group({
      name: [''],
      email: [''],
      password: [''],
      password_confirmation:['']
    });
  }


  submitApplication(): void {
    const { name, email, password, password_confirmation } = this.applyForm.getRawValue();
    this.authservice.register(name, email, password, password_confirmation)
      .subscribe(
        (res) => {
          console.log(res);
          this.snackBar.open('Registration successful! ', 'Close', {
            duration: 3000, // Duration the snackbar is displayed in milliseconds
          });
          this.router.navigate(['/']);
        },
        (error) => {
          console.error(error);
          this.snackBar.open('Registration failed. Please try again.', 'Close', {
            duration: 3000,
          });
        }
      );
  }
}
