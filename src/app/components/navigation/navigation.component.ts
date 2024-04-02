import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    DashboardComponent,
    RouterLink,
    RouterOutlet,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
})
export class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  constructor(private overlay: OverlayContainer) {}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  option = false;

  event() {
    if (this.option === false) {
      this.option = true;
    } else {
      this.option = false;
    }
  }
  toggleControl = new FormControl(false);
  @HostBinding('class') ClassName = '';
  darkClassName = 'theme-dark';
  lightClassName = 'theme-light';
  ngOnInit() {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.ClassName = darkMode ? this.darkClassName : this.lightClassName;
      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName);
      } else {
        this.overlay.getContainerElement().classList.add(this.lightClassName);
      }
    });
  }
}
