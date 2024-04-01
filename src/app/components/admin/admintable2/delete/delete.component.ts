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
    private router: ActivatedRoute,
    private route: Router,
    public dialogRef: MatDialogRef<TabletestComponent>
  ) {
    this.userId = parseInt(this.router.snapshot.paramMap.get('id') || '');

    //console.log(this.userId);

    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setdeletedata(this.inputdata.code);
      console.log(this.inputdata.code);
    }
    //this.delete(this.userId);
    //this.route.navigate(['/admin']);
  }

  delete() {
    this.code = this.inputdata.code;
    this.crud.deleteuser(this.code).subscribe((res) => {});
  }
  setpopundata(code: any) {
    this.crud.getUserById(code).subscribe((item) => {
      this.deletedata = item;
    });
  }

  setdeletedata(code: any) {
    this.crud.getUserById(code).subscribe((item) => {
      this.deletedata = item;
      //console.log(this.deletedata);
    });
  }
}
