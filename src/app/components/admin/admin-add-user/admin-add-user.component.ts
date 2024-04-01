import {
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import { Admintable2Component } from '../admintable2/admintable2.component';
import { CrudService } from '../services/crud.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TabletestComponent } from '../admintable2/tabletest/tabletest.component';
import { LazyLoadingService } from '../services/lazy-loading.service';

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
    public formBiulder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private lazyload: LazyLoadingService,
    private route: Router
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
    this.crud.adduser(this.applyForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
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
  save() {
    this.crud.adduser(this.applyForm.value).subscribe((res) => {});
  }
  f() {
    console.log(this.applyForm.value);
  }

  // applyForm = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(''),
  //   description: new FormControl(''),
  // });
}
