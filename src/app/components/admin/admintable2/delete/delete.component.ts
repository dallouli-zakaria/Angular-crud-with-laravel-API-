import { Component, Inject } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Admintable2Component } from '../admintable2.component';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { TabletestComponent } from '../tabletest/tabletest.component';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    Admintable2Component,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatButton,
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
})
export class DeleteComponent {
  userId!: Number;
  deletedata: any;
  inputdata!: any;
  code!: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private crud: CrudService,
    public dialogRef: MatDialogRef<TabletestComponent>,
    private snackBar :MatSnackBar
  ) {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setdeletedata(this.inputdata.code);
      console.log(this.inputdata.code);
    }
  }

  delete() {
    this.code = this.inputdata.code;
    this.crud.deleteuser(this.code).subscribe((res) => {
      this.snackBar.open('deleted successfully', 'Close', {
        duration: 3000,
      });
    });
  }

  setdeletedata(code: any) {
    this.crud.getUserById(code).subscribe((item) => {
      this.deletedata = item;
    });
  }
}
