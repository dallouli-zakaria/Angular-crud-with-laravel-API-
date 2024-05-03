import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialogModule,
  MatDialogContent,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CrudService } from '../../services/crud.service';
import { TabletestComponent } from '../tabletest/tabletest.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-add-user',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatDialogContent,
    ReactiveFormsModule,
    TabletestComponent,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent implements OnInit {
  applyForm: FormGroup;
  editdata: any;
  inputdata: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TabletestComponent>,
    private crud: CrudService,
    public formBiulder: FormBuilder,
    private snackBar :MatSnackBar
  ) {
    this.applyForm = this.formBiulder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setpopundata(this.inputdata.code);
    }
  }

  submitApplication() {
    this.crud.updateuser(this.applyForm.value, this.inputdata.code).subscribe(
      (res) => {
        this.snackBar.open('updated successfully', 'Close', {
          duration: 3000,
        });
        //console.log(res);
        this.dialogRef.close(true); // Close the dialog with a success flag
      },
      (err) => {
        console.log(err);
        // Handle error messages or show appropriate alerts to the user
      }
    );
  }
  setpopundata(code: any) {
    this.crud.getUserById(code).subscribe((item) => {
      this.editdata = item;
      this.applyForm.setValue({
        name: this.editdata.name,
        price: this.editdata.price,
        description: this.editdata.description,
      });
    });
  }

  // applyForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   description: new FormControl(''),
  // });
}
