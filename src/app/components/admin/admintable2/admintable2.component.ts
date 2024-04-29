
import { Component, inject } from '@angular/core';
import { TabletestComponent } from './tabletest/tabletest.component';
import { AdminAddUserComponent } from '../admin-add-user/admin-add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-admintable2',
  standalone: true,
  templateUrl: './admintable2.component.html',
  styleUrl: './admintable2.component.css',
  imports: [TabletestComponent, MatButton,NavigationComponent],
})
export class Admintable2Component {
  constructor(public dialog: MatDialog) {}

  // openDialog(
  //   enterAnimationDuration: string,
  //   exitAnimationDuration: string
  // ): void {
  //   var _popup = this.dialog.open(AdminAddUserComponent, {
  //     width: '350px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });

  // }
}
