import { Component } from '@angular/core';
import { Admintable2Component } from './admintable2/admintable2.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [Admintable2Component],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {}
