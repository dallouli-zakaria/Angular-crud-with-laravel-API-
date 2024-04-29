import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoadingspinnerComponent } from './components/admin/admintable2/loadingspinner/loadingspinner.component';
import { LoginComponent } from './components/login-auth/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavigationComponent, LoadingspinnerComponent,LoginComponent],
})
export class AppComponent {
  title = 'angular-front';
}
