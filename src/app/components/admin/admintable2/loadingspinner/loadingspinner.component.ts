import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loadingspinner',
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule],
  templateUrl: './loadingspinner.component.html',
  styleUrl: './loadingspinner.component.css',
})
export class LoadingspinnerComponent {
  isloaded = false;
  constructor() {}
}
