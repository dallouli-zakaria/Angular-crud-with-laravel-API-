import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TabletestComponent } from '../admintable2/tabletest/tabletest.component';

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
  templateUrl: './admin-add-user.component.html',
  styleUrl: './admin-add-user.component.css',
})
export class AdminAddUserComponent implements OnInit {
  applyForm: FormGroup;
  editdata: any;
  inputdata: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TabletestComponent>,
    private crud: CrudService,
    public formBiulder: FormBuilder
  ) {
    this.applyForm = this.formBiulder.group({
      name: [''],
      price: [''],
      description: [''],
    });
  }
  ngOnInit(): void {}

  submitApplication() {
    this.crud.adduser(this.applyForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
